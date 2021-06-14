import {Component, OnInit} from '@angular/core';
import {ConnectedSensorModel} from '../interfaces/connected-sensor.model';
import {ConnectedSensorsService} from '../services/connected-sensors.service';
import {groupArray} from '../common/common-functions';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-connected-sensors',
  templateUrl: './connected-sensors.component.html',
  styleUrls: ['./connected-sensors.component.css']
})
export class ConnectedSensorsComponent implements OnInit {

  private readonly CHUNK = 3;
  public readonly SENSOR_COL_CLASS = `p-col-${12 / this.CHUNK}`;
  sensors: ConnectedSensorModel[];
  groupedSensors: ConnectedSensorModel[][];
  infoMessage: Message[];

  constructor(private connSensorsService: ConnectedSensorsService) {}

  ngOnInit(): void {
    this.infoMessage = [
      {severity: 'info', summary: 'Note:', detail: 'All sensors with ID less than 1 are not registered in DB. ' +
          'Without record in DB you can\'t see sensors detail info. Temperature from these sensors isn\'t writing to the database.'}
    ];
    this.getConnSensors();
  }

  private getConnSensors(): void {
    this.connSensorsService.getConnectedSensors()
      .subscribe(sensors => {
        this.sensors = sensors;
        this.groupedSensors = groupArray(sensors, this.CHUNK);
      });
  }

}
