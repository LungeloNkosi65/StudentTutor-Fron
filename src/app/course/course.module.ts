import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEffects } from '../store/effects/course.effects';
import { CourseService } from '../services/course.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { courseReducer } from '../store/reducers/course.reducer';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';



@NgModule({
  declarations: [CourseListComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  providers: [CourseService],
  bootstrap: []
})
export class CourseModule { }
