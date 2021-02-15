import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public resetPasswordForm!: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public error: boolean = false;
  public errorMessage!: string;

  constructor(
    private _authService:AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }


  get f() { 
    console.log(this.resetPasswordForm.controls);
    return this.resetPasswordForm.controls; 
  }

  resetPassword() {
    this.error = false;
    this.submitted = true;
    this.loading = true;

    if (this.resetPasswordForm.invalid) {
      this.loading = false;
      return;
    }

     
    this._authService.forgotPassword(this.resetPasswordForm.value).subscribe((res) => {
      if (res) {
        this.loading = false;
        this.submitted = false;
      }

      if (res.detail === 'Failed to send email.') {
          this.error = true;
          this.errorMessage = res.detail;
          return;
      }

      this.resetPasswordForm.reset();

    }, error => {

      this.error = true;
      this.loading = false;
      this.submitted = false;
      console.log('THERE IS AN ERROR', error);
      if (error.detail) {
        this.errorMessage = error.detail;
      }
    })
  }

}
