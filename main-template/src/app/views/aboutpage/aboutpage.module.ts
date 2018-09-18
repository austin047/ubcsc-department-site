import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AboutpageComponent } from './aboutpage.component';
import { AboutpageRoutingModule } from './aboutpage-routing.module';

@NgModule({
  imports: [
    AboutpageRoutingModule,
  ],
  declarations: [ AboutpageComponent ]
})
export class AboutpageModule { }
