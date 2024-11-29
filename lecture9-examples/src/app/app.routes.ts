import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HelloWithParamsComponent } from './hello-with-params/hello-with-params.component';

export const routes: Routes = [
    { path: 'hello', component: HelloComponent},
    { path: 'hello-with-params/:id/sort/:order', component: HelloWithParamsComponent, data: { key: "value"} },
    { path: '**', component: NotFoundComponent }
];
