import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'individual-comparator',
  templateUrl: './individual-comparator.component.html'
})
export class IndividualComparatorComponent {
  employeeList = this.el.getAllEmployees().pipe(
    tap(list => {
      this.comparedEmployees = [list[0], list[1]];
    })
  );

  comparedEmployees: Employee[] = [];

  constructor(private el: EmployeeLoader) {}

  updateComparison(emp: Employee) {
    this.comparedEmployees = [this.comparedEmployees[0], emp];
  }

  reverseComparison() {
    this.comparedEmployees = [
      this.comparedEmployees[1],
      this.comparedEmployees[0]
    ];
  }
}
