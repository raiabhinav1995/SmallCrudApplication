export class Employee
{
    emp_Name: string;
    emp_Loc: string;
    emp_Email: string;
    emp_Number: Number;
    constructor(name, loc, email, number)
    {
        this.emp_Name=name;
        this.emp_Loc=loc;
        this.emp_Email=email;
        this.emp_Number=number;
    }
}