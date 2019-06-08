import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'store-comparator',
  templateUrl: './store-comparator.component.html',
  styleUrls: ['./store-comparator.component.css']
})
export class StoreComparatorComponent {
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
