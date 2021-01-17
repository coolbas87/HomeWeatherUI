import {Component, Input, OnInit} from '@angular/core';
import {ConnectedSensor} from '../../interfaces/connected-sensor';

@Component({
  selector: 'app-connected-sensor',
  templateUrl: './connected-sensor.component.html',
  styleUrls: ['./connected-sensor.component.css']
})
export class ConnectedSensorComponent implements OnInit {

  @Input() connectedSensor: ConnectedSensor;

  constructor() { }

  ngOnInit(): void {
  }

  public isCanShowDetailInfo(): boolean {
    return this.connectedSensor.sensorID > 0;
  }
}
