import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import swal from 'sweetalert';

import { HomeComponent } from './home.component';
import { HodMessageComponent } from './hod-message/hod-message.component';

import { HomeRoutingModule } from './home-routing.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';



import { UploadPictureComponent } from './upload-picture/upload-picture.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeSlidesComponent } from './home-slides/home-slides.component';



@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    ProgressbarModule.forRoot(),
    CarouselModule
  ],
  declarations: [ 
  HomeComponent, 
  HodMessageComponent, 
  ContactInfoComponent, 
  UploadPictureComponent, 
  HomeSlidesComponent ]
  ,
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
