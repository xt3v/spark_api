import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public resetPasswordForm!: FormGroup;
  public forgotPasswordForm!: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public error: boolean = false;
  public errorMessage!: string;
  public phoneMessageWithPlusSign!:string;

  constructor(
    private _authService:AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      phone: ['', [ Validators.required, Validators.minLength(1), Validators.maxLength(12), Validators.pattern('^[(]{0,1}[0-9]{1,4}[)]{0,1}[-./0-9]*$')]]
    });

    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    })

  }

  get f() { 

    this.phoneMessageWithPlusSign  = '';
    const errors = this.resetPasswordForm.controls.phone.errors;
    
    if ( errors !== null ) {
      if (typeof errors.maxLength === 'object' || typeof errors.minLength === 'object') {
        if (errors.pattern.actualValue.indexOf('+') > -1 ) {
          this.phoneMessageWithPlusSign = 'Please remove the (+) on the country code in your phone number.';
        }
      }
    }
    
    return this.resetPasswordForm.controls; 
  }

  forgotPassword() {

  }

  resetPassword() {
    this.error = false;
    this.submitted = true;
    this.loading = true;

    if (this.resetPasswordForm.invalid) {
      this.loading = false;
      return;
    }

    let phone = this.resetPasswordForm.value.phone;

    if (phone.indexOf('+') > -1 ) {
      this.errorMessage = 'Please remove the (+) on the country code in your phone number.';
      return;
    }
     
    this._authService.forgotPassword(phone).subscribe((res) => {
      if (res) {
        this.loading = false;
        this.submitted = false;

        const { phone } = res;
      }

      this.resetPasswordForm.reset();

    }, error => {

      this.error = true;
      this.loading = false;
      this.submitted = false;

      if ( error.indexOf('Not a valid string.') > -1 ) {
        this.errorMessage = 'Phone Number must have a valid format.';
      } else if ( error === 'Enter country code without +'){
        this.errorMessage = 'Please remove the (+) on the country code in your phone number.';
      } else if ( error.indexOf('Username not registered') > -1 || error.indexOf('user does not exist.') > -1)  {
        this.errorMessage = 'This user does not exist!';
      } else {
        this.errorMessage = `Connection error! Try again after a few minutes. Kindly contact your administrator if issue persists!`;
      }
      //show the error returned
      //show an alert detailing the error message
    })
  }

}
