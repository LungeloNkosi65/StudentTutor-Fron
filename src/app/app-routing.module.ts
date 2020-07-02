import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course/components/course-list/course-list.component'


const routes: Routes = [
  {path:'', component:CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
