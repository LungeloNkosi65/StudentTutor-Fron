import { CourseState } from '../reducers/course.reducer';
import { Course } from '../../models/Course';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from '../reducers/course.reducer';

export const courseFeatureSelector = createFeatureSelector<CourseState>('courses');

export const getAllCourses = createSelector(
    courseFeatureSelector,
    selectAll
  );

  export const areCoursesLoaded = createSelector(
    courseFeatureSelector,
    state => state.coursesLoaded
  );