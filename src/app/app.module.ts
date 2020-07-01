import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import {Router,Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AppRoutingModule } from './app.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeService } from './employee.service';
import { environment } from 'src/environments/environment';
//import { EmployeService } from './employe.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, NgbModule],
  declarations: [ AppComponent, HeaderComponent, EmpListComponent, AddEmpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
