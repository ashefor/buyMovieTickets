import { Component, OnInit } from '@angular/core';
import { PaystackService } from 'src/app/paystack.service';

interface PaystackOptions {
  key: string; // your paystack key
  email: string; // your email
  amount: number; // amount in kobo
  currency: string; // usuually 'NGN'
  ref: string; // your txtRef
  firstname: string; // user name i think
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  // paystackoptions: {
  //   key : string,
  //   email: string,
  //   amount: number,
  //   currency: string,
  //   ref: string,
  //   firstname: string
  // }

  paystack2500payptions: PaystackOptions = {
    key : "pk_live_de2ddae4bd862a98fd23b02a19bcd37a1f476bc8",
    email: "email@test.com",
    amount: 250000,
    currency: "NGN",
    ref: "",
    firstname: "username"
  }

  paystack3000payptions: PaystackOptions = {
    key : "pk_live_de2ddae4bd862a98fd23b02a19bcd37a1f476bc8",
    email: "thatsureboy@gmail.com",
    amount: 300000,
    currency: "NGN",
    ref: "",
    firstname: "username"
  }
  phonenumber: 08028403095;


  constructor(private paystack: PaystackService) { 
  }

  ngOnInit() {
  }

  pay2500withpaystack(){
    this.paystack.pay(this.paystack2500payptions, this.phonenumber)
  }

  pay3000withpaystack(){
    this.paystack.pay(this.paystack3000payptions, this.phonenumber)
  }
  
}
