import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { AlertComponent } from './components/alert/alert.component';
import { DepartmentComponent } from './components/department/department.component';
import { CourseComponent } from './components/course/course.component';
import {CourseListComponent} from './course/components/course-list/course-list.component'
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FacultyComponent,
    AlertComponent,
    DepartmentComponent,
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
