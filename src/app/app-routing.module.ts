import { HelloWithParamsComponent } from './hello-with-params/hello-with-params.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent},
  { path: 'hello-with-params/:id/sort/:order', component: HelloWithParamsComponent, data: { key: "value"} },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
