import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  standalone: true,
  imports: [NgIf]
})
export class EmployeeDisplayComponent {
  @Input({ required: true }) employee: Employee | undefined;
}
