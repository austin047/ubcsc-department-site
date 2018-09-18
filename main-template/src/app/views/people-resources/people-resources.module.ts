import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';


import { PeopleResourcesComponent } from './people-resources.component';
import { PeopleResourcesRoutingModule } from './people-resources-routing.module';

@NgModule({
  imports: [
    PeopleResourcesRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [ PeopleResourcesComponent ]
})
export class PeopleResourcesModule { }
