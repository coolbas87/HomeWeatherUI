import { Component, OnInit } from '@angular/core';
import {ConnectedSensor} from '../interfaces/connected-sensor';
import {ConnectedSensorsService} from '../services/connected-sensors.service';

@Component({
  selector: 'app-connected-sensors',
  templateUrl: './connected-sensors.component.html',
  styleUrls: ['./connected-sensors.component.css']
})
export class ConnectedSensorsComponent implements OnInit {

  private readonly CHUNK = 3;
  public readonly SENSOR_COL_CLASS = `col-sm-${12 / this.CHUNK}`;
  sensors: ConnectedSensor[];
  groupedSensors: ConnectedSensor[][];

  constructor(private connSensorsService: ConnectedSensorsService) { }

  ngOnInit(): void {
    this.getConnSensors();
  }

  groupArray<T>(data: Array<T>, chunk: number): Array<T[]> {
    let group = new Array<T[]>();
​
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= chunk && i % chunk === 0) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
​
    return group;
  }

  private getConnSensors(): void {
    this.connSensorsService.getConnectedSensors()
      .subscribe(sensors => {
        this.sensors = sensors;
        this.groupedSensors = this.groupArray(sensors, this.CHUNK);
      });
  }

}
