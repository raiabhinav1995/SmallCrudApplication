import { Injectable } from '@angular/core';
//import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesArray: Employee[] =
    [
      { emp_Name: 'Abhinav', emp_Email: 'raiabhinav1995@gmail.com', emp_Loc: 'Delhi', emp_Number: 9013931609 },
      { emp_Name: 'Abhilash', emp_Email: 'raiabhinav1995@gmail.com', emp_Loc: 'Delhi', emp_Number: 9013931609 },
    ];
  constructor() { }
  addEmployee(emp: Employee) {
    console.log('Employee added ' + emp);
    this.employeesArray.push(emp);

  }
  getEmployees() {
    return this.employeesArray;
  }
  deleteEmp(emp: Employee) {
    let a = this.employeesArray.indexOf(emp);
    console.log(a);
    this.employeesArray.splice(a, 1);
    console.log(this.employeesArray);
  }
  editEmployee(emp: Employee) {
    return emp;
  }



}
