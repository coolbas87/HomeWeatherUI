import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { TempHistoryComponent } from './temp-history/temp-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CurrentTemperatureComponent },
  { path: 'TempHistory/:snID', component: TempHistoryComponent },
  { path: 'TempHistory', component: TempHistoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
