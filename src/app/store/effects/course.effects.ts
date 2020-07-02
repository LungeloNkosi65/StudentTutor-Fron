import { courseActionTypes, coursesLoaded } from '../actions/course.action';
import { CourseService } from '../../services/course.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CourseEffects {
    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(courseActionTypes.loadCourses),
            concatMap(() => this.courseService.getCourse()),
            map(courses => courseActionTypes.coursesLoaded({ courses }))
        )
    );
    
    constructor(private courseService: CourseService, private actions$: Actions, private router: Router) { }
}