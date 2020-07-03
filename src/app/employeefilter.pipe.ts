import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.model';

@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employees: Employee[], searchTerm: string): Employee[] {
    if (!employees || !searchTerm)
    {
    return employees;
    }
    return employees.filter(employee =>
        employee.emp_Name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
