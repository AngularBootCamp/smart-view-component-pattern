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
  styleUrls: ['./employee-comparison.component.scss'],
  standalone: true,
  imports: [EmployeeDisplayComponent]
})
export class EmployeeComparisonComponent {
  @Input() theFirstEmployee: Employee | undefined;
  @Input() theSecondEmployee: Employee | undefined;
  @Output() reverse = new EventEmitter<void>();
}
