import { Injectable , OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements OnInit{

  customer_details_list= []
  constructor() { }
  ngOnInit(){
    console.log("In Init Service",this.customer_details_list);
  }
  saveCustomerInfo(customerDetails){
    console.log("from component",customerDetails);
    console.log("first",this.customer_details_list);
    this.customer_details_list.push(customerDetails);
    console.log("then",this.customer_details_list);
  }
}   
