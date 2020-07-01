import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
//import { EmployeService } from '../employe.service';

@Component({
  selector: 'emplist',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empArray=this.empService.getEmployees();
  i=0;
  increament()
  {
    this.i++;
  }
  constructor(private empService:EmployeeService) { }
  editEmp(event)
  {
    // console.log(event);
    //this.empService.editEmployee(event);
  }
  deleteEmp(event)
  {
    console.log(event);
    this.empService.deleteEmp(event);
    //this.empArray=this.empService.getEmployees();
  }
  ngOnInit() {
  }

}