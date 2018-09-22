import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AppInitUrl } from './../../../app-init-url'


@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  constructor(private http: HttpClient, private appInitUrl: AppInitUrl) { }
  baseUrl = this.appInitUrl.BaseUrl
  percentDone: number = 0;
  uploadSuccess;
  max: number  = 100; 
  file: File;
  uploadReady = false;
  filesize: any = 0;
  fileTypes = ".png,.jpg,.jpeg"

  @Output() newFile = new EventEmitter<Object>();
  

  ngOnInit() {
  }


  set(files: File[]){
   
    this.file = files[0];
    // console.log(this.file.size);
    
    let temp  = this.file.size / 1000000;
    this.filesize = temp.toFixed(2);
    
    this.uploadReady = true;
  }

  upload() {
    this.uploadAndProgressSingle(this.file);
  }

  uploadAndProgressSingle(file: File) {

    let formData = new FormData();
    formData.append('file',file);
    
    //http://localhost:4000/api/courses/5b8ba59042d01f26c88c5351/material

    this.http.post(`${this.baseUrl}/api/home/pictures`, formData, {reportProgress: true, observe: 'events'})
      .subscribe( event => {
        if(event.type === HttpEventType.UploadProgress){
          this.percentDone = Math.round(100 * event.loaded / event.total);   
        } else if(event instanceof HttpResponse) {
          // console.log(event);
         console.log(event.body);
          this.newFile.emit(event.body);
          
          setTimeout(() => {
        swal("Success!", "Picture Uploaded", "success"); this.percentDone = 0;
      }, 1000);
        }
      })
  }

}



 // uploadAndProgress(files: File[]){
  //   console.log(files)
  //   var formData = new FormData();
  //   //Get the id of the element contianing the progress 
  //   var elem = document.getElementById("myBar");
  //   elem.style.width = `${0}%`;

  //   Array.from(files).forEach(f => formData.append('file',f))
   
    
  //   this.http.post('http://localhost:4000/api/courses/5b8ba59042d01f26c88c5351/material', formData, {reportProgress: true, observe: 'events'})
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         console.log(event);
  //         console.log(event.loaded + " " + event.total);

  //       } else if (event instanceof HttpResponse) {
  //        this.uploadSuccess = true;
  //        setTimeout(() => {
  //         swal("Success!", "Picture Uploaded", "success");
          
  //       }, 3000);
        
  //       }
  //   });
  // }
