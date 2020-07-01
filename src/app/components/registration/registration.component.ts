import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  students: Student[];
  registrationForm: any;
  courses: Course[];
  courseId: number;
  dataSaved = false;
  constructor(private studentService: StudentService, private formBuilder: FormBuilder, private courseService: CourseService) {
    this.getCourseForDropdown();
    this.getStudentDetails();
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      StudentNumber: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Level: ['', [Validators.required]],
      // CourseId: [this.courseId, [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    });
  }


  onFormSubmit(){
 
    this.dataSaved=false;
    const studet=this.registrationForm.value;
    console.log('Student Data',studet)
    this.regusterStudent(studet);
  }
  Register(student: Student) {
    if (student != null) {
      const studenty_Master = this.registrationForm;
      this.studentService.addStudent(studenty_Master).subscribe(() => {
        this.resetForm();
        this.getStudentDetails();
        console.log(studenty_Master);
      });
    }
    else {
      window.Error("Please fill in all required fields");
    }

  }
  resetForm() {
    this.registrationForm.reset();
  }

  getCourseForDropdown() {
    this.courseService.getCourse().subscribe((data: any) => {
      this.courses = data;
      console.log('Retrieved from DB', this.courses)
    });
  }

  getCourseId(courseId: any) {
    this.courseId = courseId;
    console.log('courserID', this.courseId)
    return courseId;
  }

  regusterStudent(student: Student) {
    student.CourseId=this.courseId;
    student.StudentId=`St${this.courses.length+1}`;
    this.studentService.addStudent(student).subscribe(() => {
      this.dataSaved = true;
      this.resetForm();
      this.getStudentDetails();
    });

  }

  getStudentDetails() {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students=data;
      console.log('Students On Db', data);
    })
  }

}
