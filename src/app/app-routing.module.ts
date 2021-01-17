import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { TempHistoryComponent } from './temp-history/temp-history.component';
import {ConnectedSensorsComponent} from './connected-sensors/connected-sensors.component';
import {ConnectedSensorDetailsComponent} from './connected-sensors/connected-sensor-details/connected-sensor-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CurrentTemperatureComponent },
  { path: 'TempHistory/:snID', component: TempHistoryComponent },
  { path: 'TempHistory', component: TempHistoryComponent },
  { path: 'ConnectedSensors', component: ConnectedSensorsComponent },
  { path: 'ConnectedSensors/:snID', component: ConnectedSensorDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
