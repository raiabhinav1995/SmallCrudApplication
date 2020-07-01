import { Component, OnInit } from '@angular/core';
//import { EmployeService } from '../employe.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'addemp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  submitDetails()
  {
    console.log('We are in submit details');
    let inputValue1 = (<HTMLInputElement>document.getElementById('i1')).value;
    let inputValue2 = (<HTMLInputElement>document.getElementById('i2')).value;
    let inputValue3 = (<HTMLInputElement>document.getElementById('i3')).value;
    let inputValue4 = (<HTMLInputElement>document.getElementById('i4')).value;
    this.empService.addEmployee(new Employee(inputValue1,inputValue2,inputValue3,inputValue4));
  }
  locationArray=
  [
    'Pune',
    'Bangalore',
    'Chennai',
    'Hyderabad'  
  ];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
  }

}