import { Component } from '@angular/core';
import { Student } from './stdSerivice';
import { studentService } from './student.service';
@Component({
  selector: 'app-std-details',
  templateUrl: './std-details.component.html',
  styleUrls: ['./std-details.component.scss']
})
export class StdDetailsComponent {
std: Student[] | undefined;
studentService;
constructor(){
  this.studentService = new studentService();
}

getstd()
{
  this.std = this.studentService.getStd();
}
}
