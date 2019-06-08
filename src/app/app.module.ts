import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComparisonComponent } from './employee-comparison/employee-comparison.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { EmployeeExplorerComponent } from './employee-explorer/employee-explorer.component';
import { IndividualComparatorComponent } from './individual-comparator/individual-comparator.component';
import { StoreComparatorComponent } from './store-comparator/store-comparator.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComparisonComponent,
    EmployeeDisplayComponent,
    EmployeeExplorerComponent,
    StoreComparatorComponent,
    IndividualComparatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
