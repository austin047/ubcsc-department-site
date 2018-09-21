import { Component, OnInit,  isDevMode } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppInitUrl } from './../../app-init-url'

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent  {
  
  public saveProfilePictureModal;
  public savePersonalInfoModal;

  public testVar: any = {name:'Angular', message: 'Error reaching server'};

    constructor(private appInitUrl : AppInitUrl) { 
      console.log(this.appInitUrl.BaseUrl);
      if(isDevMode()) {
        console.log('development')
      } else {
        console.log('Production')
      }
    }


      ngOnInit() {
  }
}
