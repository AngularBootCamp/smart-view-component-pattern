import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-comparison',
  templateUrl: './employee-comparison.component.html',
  styleUrls: ['./employee-comparison.component.css']
})
export class EmployeeComparisonComponent {
  @Input() theFirstEmployee: Employee | undefined;
  @Input() theSecondEmployee: Employee | undefined;
  @Output() reverse = new EventEmitter<void>();
}
