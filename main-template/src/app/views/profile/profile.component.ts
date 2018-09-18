import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { GeneralService } from './../../general.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent  {
  
  public saveProfilePictureModal;
  public savePersonalInfoModal;

  public testVar: Object = {name:'Angular', message: 'Error reaching server'};

    constructor(private generalService: GeneralService) { }

      ngOnInit() {
        if (this.testVar) {
          this.generalService.getHomePageInfo()
        .subscribe(data => {
          this.testVar = data
       //   console.log(this.testVar);
        })
    }
  }
}
