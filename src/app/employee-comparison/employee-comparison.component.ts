import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { EmployeeDisplayComponent } from '../employee-display/employee-display.component';
import { Employee } from '../employee-loader.service';

@Component({
  selector: 'app-employee-comparison',
  templateUrl: './employee-comparison.component.html',
  styleUrl: './employee-comparison.component.scss',
  standalone: true,
  imports: [EmployeeDisplayComponent]
})
export class EmployeeComparisonComponent {
  @Input({ required: true }) theFirstEmployee: Employee | undefined;
  @Input({ required: true }) theSecondEmployee: Employee | undefined;
  @Output() reverse = new EventEmitter<void>();
}
