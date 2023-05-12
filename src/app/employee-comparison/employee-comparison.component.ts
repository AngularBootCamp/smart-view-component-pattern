import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'app-employee-comparison',
  templateUrl: './employee-comparison.component.html',
  styleUrls: ['./employee-comparison.component.scss']
})
export class EmployeeComparisonComponent {
  @Input() theFirstEmployee: Employee | undefined;
  @Input() theSecondEmployee: Employee | undefined;
  @Output() reverse = new EventEmitter<void>();
}
