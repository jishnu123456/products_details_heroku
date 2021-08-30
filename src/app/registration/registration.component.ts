import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[MessageService]
})
export class RegistrationComponent implements OnInit {
   registrationForm!: FormGroup;
   registration!:Registration;
   submitted=false;
   removeButtonVisibility=false;
   public addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  constructor(    
    private router: Router,
    private messageService:MessageService
        ) { }

  ngOnInit(): void {
    this.initiallizeForm();
    this.initializeRegistrationDetails();
  }
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
  initializeRegistrationDetails(){
    this.registration={
      name:null,
      email:null,
      phone:null,
      billingAddress:null,
      billingPinCode:null,
      billingLandline:null,
      shippingAddress:null,
      shippingPinCode:null,
      shippingLandline:null,
    }
  }
  initiallizeForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, {
        validators: [
          Validators.required,
        ],
      }),
      email: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.email
        ],
      }),
      phone: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      billingAddress:new FormControl(null, {
        validators: [
          Validators.required,
        ],
      }),
      billingPinCode:new FormControl(null, {
        validators: [
          Validators.required,
        ],
      }),
      billingLandline:new FormControl(null, {
        validators: [
          Validators.required,
        ],
      }),
      shippingAddress:new FormControl(null, {
        validators: [
          Validators.required,
        ],
      }),
      shippingPinCode:new FormControl(null, {
        validators: [
          Validators.required,
        ],
      }),
      shippingLandline:new FormControl(null, {
        validators: [
          Validators.required,
        ],
      })
    });
  }
  addAddress() {
    debugger
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
    if(this.addresses.length>1){
      this.removeButtonVisibility=true;
    }
  }
  removeAddress(i: number) {   
    debugger
    this.addresses.splice(i, 1);
    if(this.addresses.length === 1){
      this.removeButtonVisibility=false;
    }
  }
  register(){
    debugger
    this.submitted=true;
    if(this.registrationForm.status === 'VALID'){
      this.messageService.clear();
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Registered!',
      });
      this.router.navigate(['/product'], { replaceUrl: true });
    }
    else{
      this.messageService.clear();
      this.messageService.add({
        severity: 'error',
        summary: 'Warning',
        detail: 'Please enter mandatory field(s)!',
      });
    }
  }
}
