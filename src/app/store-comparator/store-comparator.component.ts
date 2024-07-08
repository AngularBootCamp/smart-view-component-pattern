import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { EmployeeComparisonComponent } from '../employee-comparison/employee-comparison.component';
import { EmployeeExplorerComponent } from '../employee-explorer/employee-explorer.component';
import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  templateUrl: './store-comparator.component.html',
  styleUrl: './store-comparator.component.scss',
  standalone: true,
  imports: [
    EmployeeComparisonComponent,
    EmployeeExplorerComponent,
    AsyncPipe
  ]
})
export default class StoreComparatorComponent {
  easternEmployeeList = this.el.getEasternStoreEmployees().pipe(
    tap(list => {
      this.easternEmployee = list[0];
    })
  );

  westernEmployeeList = this.el.getWesternStoreEmployees().pipe(
    tap(list => {
      this.westernEmployee = list[0];
    })
  );

  easternEmployee: Employee | undefined;
  westernEmployee: Employee | undefined;

  constructor(private el: EmployeeLoader) {}

  setLeftEmployee(emp: Employee) {
    this.easternEmployee = emp;
  }
  setRightEmployee(emp: Employee) {
    this.westernEmployee = emp;
  }
}
