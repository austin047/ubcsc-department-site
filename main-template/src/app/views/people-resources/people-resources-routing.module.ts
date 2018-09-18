import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleResourcesComponent } from './people-resources.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleResourcesComponent,
    data: {
      title: 'People-Resources'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PeopleResourcesRoutingModule {}