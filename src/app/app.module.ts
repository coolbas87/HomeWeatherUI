import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { GaugeChartModule } from 'angular-gauge-chart';

import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { SensorComponent } from './current-temperature/sensor/sensor.component';
import { TempHistoryComponent } from './temp-history/temp-history.component';
import { HeaderComponent } from './header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ChartComponent } from './temp-history/chart/chart.component';
import { ConnectedSensorsComponent } from './connected-sensors/connected-sensors.component';
import { ConnectedSensorDetailsComponent } from './connected-sensors/connected-sensor-details/connected-sensor-details.component';
import { ConnectedSensorComponent } from './connected-sensors/connected-sensor/connected-sensor.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTemperatureComponent,
    SensorComponent,
    TempHistoryComponent,
    HeaderComponent,
    ChartComponent,
    ConnectedSensorsComponent,
    ConnectedSensorDetailsComponent,
    ConnectedSensorComponent,
    WeatherForecastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    PanelModule,
    MenubarModule,
    CalendarModule,
    TableModule,
    ChartModule,
    MessagesModule,
    MessageModule,
    OverlayPanelModule,
    GaugeChartModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
