import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
//import { GeneralService } from './../../general.service';
import { HomeService } from './home.service';
import * as _ from 'lodash';
import { HomeInfo } from './home.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeImage } from './home.interface'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}


  homePagePic: HomeImage[];
  announcements: object[];

  contactUs: {number: FormControl, email: FormControl};
  
  hodmessage: FormControl;
  number: FormControl;
  email: FormControl;

  formhod: FormGroup
  public te = false

  createFormsControlsHOD(): void{
    this.hodmessage = new FormControl("",[
      Validators.required,
      Validators.minLength(10)
    ]);

    this.number = new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern(/^[0-9]{8}$/)
    ]);

    this.email = new FormControl("",[
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]);

    this.contactUs = {number: this.number, email: this.email};

  }

  
  setInitalValues(): void {
    this.homePagePic = [ 
      { filename: 'assets/img/avatars/pic1.jpg', _id: '1' },
      { filename: 'assets/img/avatars/pic3.jpg', _id: '2' },
      { filename: 'assets/img/avatars/pic4.jpg', _id: '3' }
    ];
  
    this.announcements = [
      { news: 'Departmental Calender'},
      { news: 'CA TimeTable '},
      { news: 'List of Graduating students'}
    ];
  
    this.hodmessage.setValue('This is the HOD message')

    this.number.setValue('78585744');

    this.email.setValue('ubcss@gmail.com');

    this.contactUs  = {number: this.number, email: this.email};  
    
    console.log(this.contactUs);
  
  }

  

  ngOnInit() {
    this.createFormsControlsHOD();

    this.homeService.getHomePageInfo()
     .subscribe( data => {
       if(data) {
        this.homePagePic = data.homePictures;
        this.hodmessage.setValue(data.hodMessage);
        this.number.setValue(data.contactNumber),
        this.email.setValue(data.email)
        this.contactUs = {
          number: this.number,
          email: this.email
        } 
       } else {
         this.setInitalValues();  
       }         
     }, 
     error => { console.log(error); },
      () => { console.log('Complete'); }
    )}

  



  //Modal variables 
  //public deletePictureModal;
  public deleteAnnouncementModal;
  public saveAnnouncementModal;
  public saveHODMessageModal;
  public saveContactUSModal;

  public save(event) {
    console.log(event)
  }
  public deletePicture(id: string) {
    
    // console.log(`id is ${id}`);
    // this.homeService.deletePicture(id)
    //  .subscribe(
    //    data => {
    //      if(data.isFulfilled) {
    //       this.homePagePic.forEach(element => {
    //         if(element._id == id) {
    //           element = undefined
    //           console.log(element);
    //         }
    //       });
    //      }
    //    }
    //  )
  }
   
}
