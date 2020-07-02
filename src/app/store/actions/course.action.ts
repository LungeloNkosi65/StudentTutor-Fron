import {Course} from '../../models/Course';
import {createAction,props} from '@ngrx/store';
import {Update} from '@ngrx/entity';

export const loadCourses=createAction(
    '[Courses List] Load Courses via service',
);
export const coursesLoaded=createAction(
    '[Courses Effect] Courses Loaded Successfully',
    props<{courses:Course[]}>()
);

export const createCourse=createAction(
    '[Create Course Component] Create Course',
    props<{course:Course}>()
);

export const courseActionTypes = {
    loadCourses,
    coursesLoaded,
    createCourse
};