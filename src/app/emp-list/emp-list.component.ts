import { EmployeeFilterPipe } from './../employee-filter.pipe';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'emplist',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  empArray = this.empService.getEmployees();
  searchTerm: string;

  i = 0;
  increament()
  {
    this.i++;
  }
  constructor(private empService: EmployeeService, private router: Router) {
   }
  editEmp(index: Number)
  {
    this.router.navigate([`editemp/${index}`]);
  }
  deleteEmp(event)
  {
    console.log(event);
    this.empService.deleteEmp(event);
  }
  ngOnInit() {
  }

}
