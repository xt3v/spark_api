import { Component, OnInit } from '@angular/core';
import { CustomerConfigs } from '../options';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customers-add',
  templateUrl: './customers-add.component.html',
  styleUrls: ['./customers-add.component.scss']
})
export class CustomersAddComponent implements OnInit {

  formItems: any = CustomerConfigs
  url: string = "customers/"
  instance: any
  formGroupOrder = [
    ['name', 'primary_phone', 'id_number'],
    ['region', 'village', 'closest_spark_agent_shop'],
    ['occupation', 'min_salary', 'max_salary'],
  ]
  constructor(private route: ActivatedRoute, ) {

    this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
      }
    });
  }

  ngOnInit(): void {
  }

  onValidatedData(data: any) {
  }
  onPostedData(data: any) {
  }

}
