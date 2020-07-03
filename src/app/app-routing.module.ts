import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course/components/course-list/course-list.component';
import {DepartmentComponent} from './components/department/department.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CourseComponent } from './components/course/course.component';


const routes: Routes = [
  {path:'', component:CourseListComponent},
  {path:'department',component:DepartmentComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'students',component:RegistrationComponent},
  {path:'course',component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
