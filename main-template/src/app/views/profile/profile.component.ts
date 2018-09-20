import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent  {
  
  public saveProfilePictureModal;
  public savePersonalInfoModal;

  public testVar: Object = {name:'Angular', message: 'Error reaching server'};

    constructor() { }

      ngOnInit() {
        if (this.testVar) {
       //
    }
  }
}
