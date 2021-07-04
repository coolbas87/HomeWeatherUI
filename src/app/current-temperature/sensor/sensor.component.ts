import {Component, Input, OnInit} from '@angular/core';
import { SensorModel } from '../../interfaces/sensor.model';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  readonly  SENSOR_CLASS_NAME = 'info-box bg-gradient-';

  @Input() sensor: SensorModel;
  @Input() isLoading = false;
  sensorClass = this.SENSOR_CLASS_NAME + 'light';

  constructor() { }

  ngOnInit(): void {
    this.sensorClass = this.SENSOR_CLASS_NAME + this.getSensorColor(this.sensor.temperature);
  }

  getSensorColor(temperature: number): string {
    if (temperature >= 30) {
      return 'danger';
    } else if (temperature >= 15) {
      return 'warning';
    } else if (temperature >= 0) {
      return 'info';
    } else if (temperature >= -15) {
      return 'primary';
    } else if (temperature >= -30) {
      return 'purple';
    } else {
      return 'light';
    }
  }
}
