import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';

const routes: Routes = [
  { path: 'emplist', component: EmpListComponent },
  { path: 'addemp', component: AddEmpComponent },
  {path:'editemp/:index', component: AddEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }