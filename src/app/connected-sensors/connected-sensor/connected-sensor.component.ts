import {Component, Input, OnInit} from '@angular/core';
import {ConnectedSensorModel} from '../../interfaces/connected-sensor.model';

@Component({
  selector: 'app-connected-sensor',
  templateUrl: './connected-sensor.component.html',
  styleUrls: ['./connected-sensor.component.css']
})
export class ConnectedSensorComponent implements OnInit {

  @Input() connectedSensor: ConnectedSensorModel;
  public products: [];

  constructor() { }

  ngOnInit(): void {
  }

  public isCanShowDetailInfo(): boolean {
    return this.connectedSensor.sensorID > 0;
  }
}
