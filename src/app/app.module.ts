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
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import { GMapComponent } from './components/g-map/g-map.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FacultyComponent,
    AlertComponent,
    DepartmentComponent,
    CourseComponent,
    CourseListComponent,
    GMapComponent
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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AgmCoreModule.forRoot({ //@agm/core
      apiKey: 'AIzaSyDdl92Jhloy3TczguBxXwqD5AH3m2oCNY0',
      libraries: ["places"]
    }),
    AgmDirectionModule //agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
