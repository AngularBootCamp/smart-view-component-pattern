import { Component, Input } from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  standalone: true
})
export class EmployeeDisplayComponent {
  @Input({ required: true }) employee: Employee | undefined;
}
