import { Employee } from './employee.model';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
  {
    name: 'employeeFilter'
  })
export class EmployeeFilterPipe implements PipeTransform
{
  transform(employees: Employee[], searchTerm: string): Employee[]
  {
    if (!employees || !searchTerm)
    {
    return employees;
    }
    return employees.filter(employee =>
        employee.emp_Name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
