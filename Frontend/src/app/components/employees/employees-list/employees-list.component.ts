import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  /*
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: 998877665,
      salary: 60000,
      department: 'Human Resources'
    },
    {
      id: '2',
      name: 'Anonymous User',
      email: 'anonymous.user@email.com',
      phone: 789789789,
      salary: 70000,
      department: 'Information Technology'
    },
    {
      id: '3',
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: 878787878,
      salary: 80000,
      department: 'Accounts'
    }
  ];*/
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    //Because this is an Observable, we have to subscribe on it
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) =>{
        console.log(response);
      }
    })
  }
}
