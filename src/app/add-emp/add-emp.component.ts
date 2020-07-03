import { Component, OnInit } from '@angular/core';
// import { EmployeService } from '../employe.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'addemp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  name='';
  location='';
  email='';
  mob:number;
  id=-1;
  submitDetails()
  {
    const emp={ emp_Name: this.name, emp_Email: this.email, emp_Loc: this.location, emp_Number: this.mob }
    if(this.id > -1)
    {
      this.empService.employeesArray.splice(this.id,1,emp);
    }
    else
    {
      this.empService.addEmployee(emp);
    }
    this.router.navigate(['/emplist']);
  }
  locationArray=
  [
    'Pune',
    'Bangalore',
    'Chennai',
    'Hyderabad'
  ];
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>
    {
      if(params.get('index'))
      {
        let emp1=this.empService.employeesArray[+params.get('index')];
        this.name=emp1.emp_Name;
        this.location=emp1.emp_Loc;
        this.email=emp1.emp_Email;
        this.mob=emp1.emp_Number;
        this.id= +params.get('index');
        console.log(this.id);
      }
    });
  }

}
