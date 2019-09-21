import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiServiceService} from '../api-service.service'
@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent implements OnInit {
  customer_details={
    reference_name:'',
    company_name:'',
    work_contact:'',
    cell_contact:'',
    email_address:'',
    company_address:''
  }

  ref_name= new FormControl('');            //Name of Company reference person 
  company_name=new FormControl('');         //Name of Company
  work_contact=new FormControl('');         //Contact of Company
  cell_contact=new FormControl('');         //Contact of Person
  email_address=new FormControl('');        //Email of Company
  company_address=new FormControl('');      //Address of Company

  constructor(private api:ApiServiceService) { }
 

  ngOnInit() {
  }

  saveCustomerInfo(){
    this.customer_details.reference_name=this.ref_name.value;
    this.customer_details.company_name=this.company_name.value;
    this.customer_details.work_contact=this.work_contact.value;
    this.customer_details.cell_contact=this.cell_contact.value;
    this.customer_details.email_address=this.email_address.value;
    this.customer_details.company_address=this.company_address.value;
    this.api.saveCustomerInfo(this.customer_details)
    this.resetData();
    

  }
  resetData(){
    this.ref_name.setValue('');
    this.company_name.setValue('');
    this.work_contact.setValue('');
    this.cell_contact.setValue('');
    this.email_address.setValue('');
    this.company_address.setValue('');
    this.customer_details={
      reference_name:'',
      company_name:'',
      work_contact:'',
      cell_contact:'',
      email_address:'',
      company_address:''
    }
  }
}
