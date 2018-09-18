import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutpageComponent } from './aboutpage.component';

const routes: Routes = [
  {
    path: '',
    component: AboutpageComponent,
    data: {
      title: 'AboutPage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutpageRoutingModule {}