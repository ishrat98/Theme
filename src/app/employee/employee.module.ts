import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent
  ],
  exports:  [
    CreateEmployeeComponent
  ]
})
export class EmployeeModule { }
