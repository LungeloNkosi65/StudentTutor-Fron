import { getAllCourses } from '../../../store/selectors/course.selectors';
import { courseActionTypes } from '../../../store/actions/course.action';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../../models/Course';
import { CourseService } from '../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
 courses$:Observable<Course[]>;
 courseToBeUpdated: Course;

 isUpdateActivated = false;

  constructor(private courseService: CourseService, private store: Store<AppState>) { console.log('im in')}

  ngOnInit(): void {
    this.courses$=this.store.select(getAllCourses)
    console.log(this.courses$)
  }
  
  deleteCourse(courseId: string) {
    // this.store.dispatch(courseActionTypes.deleteCourse({courseId}));
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = {...course};
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    // const update: Update<Course> = {
    //   id: this.courseToBeUpdated.id,
    //   changes: {
    //     ...this.courseToBeUpdated,
    //     ...updateForm.value
    //   }
    };

    // this.store.dispatch(courseActionTypes.updateCourse({update}));

    // this.isUpdateActivated = false;
    // this.courseToBeUpdated = null;
  
}
