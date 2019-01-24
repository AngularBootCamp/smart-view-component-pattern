import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-comparison',
  templateUrl: './employee-comparison.component.html',
  styleUrls: ['./employee-comparison.component.css']
})
export class EmployeeComparisonComponent {
  @Input() theFirstEmployee: Employee;
  @Input() theSecondEmployee: Employee;
  @Output() reverse = new EventEmitter<void>();
}
