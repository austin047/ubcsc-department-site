import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import { HomeService } from '../home.service'


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  contactusform: FormGroup;

  @Input() contactUs: {number: FormControl, email: FormControl}



  constructor(private homeService: HomeService) { }

  createContactUsForm() {
    this.contactusform = new FormGroup({
      contactus: new FormGroup({
        number: this.contactUs.number,
        email: this.contactUs.email
      })
    })  
  }

  ngOnInit() {
    this.createContactUsForm();

    console.log(this.contactusform);
    console.log(this.contactusform.value);
  }

  onSubmit() {
    console.log(this.contactusform.errors);
    if(this.contactusform.valid) {
      console.log(this.contactUs.email.value);
      this.homeService.updateHomeInfo(this.contactUs.email.value, this.contactUs.number.value)
        .subscribe(
          data => {
            console.log(data);
            this.contactUs.email.value === data.email && this.contactUs.number.value === data.contactNumber
              ? swal("Success!", "Email and Contact updated", "success")
              : swal("Failure!", "Email and Contact Not updated", "failure");
          }
        )
      
    } else {
      console.log(this.contactusform.errors);
    }
  }

}
