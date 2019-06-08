import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndividualComparatorComponent } from './individual-comparator/individual-comparator.component';
import { StoreComparatorComponent } from './store-comparator/store-comparator.component';

const routes: Routes = [
  { path: '', redirectTo: 'store-comparator', pathMatch: 'full' },
  { path: 'store-comparator', component: StoreComparatorComponent },
  {
    path: 'individual-comparator',
    component: IndividualComparatorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
