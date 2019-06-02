import { Injectable } from '@angular/core';

interface PaystackWindow extends Window {
    PaystackPop: any;
}

declare var window: PaystackWindow;

interface PaystackOptions {
    key: string; // your paystack key
    email: string; // your email
    amount: number; // amount in kobo
    currency: string; // usuually 'NGN'
    ref: string; // your txtRef
    firstname: string; // user name i think
}

@Injectable()
export class PaystackService {
    
    constructor() { }

    pay(options: PaystackOptions, phoneNumber) {
        const setUpConfig = {
          ...options,
          // label: "Optional string that replaces customer email"
          metadata: {
             custom_fields: [
                {
                    display_name: 'Mobile Number',
                    variable_name: 'mobile_number',
                    value: phoneNumber
                }
             ]
          },
          callback: response =>  {
          // call confirm endpoint
          // if u confirm form your backend first before shwoing success
        },
        onClose: () =>  {
          // handle what happens when modal closes
        }
        };
        const handler = window.PaystackPop.setup(setUpConfig);
        handler.openIframe();
      }

}