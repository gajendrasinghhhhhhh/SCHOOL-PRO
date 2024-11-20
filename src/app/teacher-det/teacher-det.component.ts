import { Component } from '@angular/core';
import { Teacher } from './teacher.service';
import { TeacherDet } from './teachdetService';

@Component({
  selector: 'app-teacher-det',
  templateUrl: './teacher-det.component.html',
  styleUrls: ['./teacher-det.component.scss']
})
export class TeacherDetComponent {
teach : TeacherDet[] | undefined;
Teacher;
constructor(){
  this.Teacher = new Teacher();
}

getTeach(){
  this.teach = this.Teacher.getTeach();
}

}
