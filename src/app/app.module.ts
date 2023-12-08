import { CourseModule } from './course/course.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuddentModule } from './studdent/studdent.module';
import { HelloComponent } from './hello/hello.component';
import { HelloWithParamsComponent } from './hello-with-params/hello-with-params.component';
import { NestedParentComponent } from './nested-parent/nested-parent.component';
import { NestedChild1Component } from './nested-child1/nested-child1.component';
import { NestedChild2Component } from './nested-child2/nested-child2.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloWithParamsComponent,
    NestedParentComponent,
    NestedChild1Component,
    NestedChild2Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    StuddentModule,
    CourseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
