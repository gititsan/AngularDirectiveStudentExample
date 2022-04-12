import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student List';


  studentList: Student[] = [
    { name: 'Sara Michelle', age: 11, class: 'Science', rollNum: 1 , admission_date: '12/12/2022' },
    { name: 'Kris John', age: 4, class: 'Math', rollNum: 2 , admission_date: '02/02/2022' },
    { name: 'Paul Mares', age: 2, class: 'Compute Science', rollNum: 3 , admission_date: '06/06/2022' },
    { name: 'Aaron Merrell', age: 12, class: 'Digital Marketing', rollNum: 4 , admission_date: '08/08/2022' }
   ]
}



class Student {
  name!: string ;
  age !: number;
  class!: string;
  rollNum!: number;
  admission_date!: string;
}