import {Component, Input, OnInit} from '@angular/core';
import {ConnectedSensorsService} from '../../services/connected-sensors.service';
import {ConnectedSensorDetailModel} from '../../interfaces/connected-sensor-detail.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-connected-sensor-details',
  templateUrl: './connected-sensor-details.component.html',
  styleUrls: ['./connected-sensor-details.component.css']
})
export class ConnectedSensorDetailsComponent implements OnInit {
  @Input() snID: number;
  connectedSensor: ConnectedSensorDetailModel;
  isLoading = true;

  constructor(private connSensorsService: ConnectedSensorsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getConnSensorInfo(this.snID);
  }

  private getConnSensorInfo(snID: number): void {
    if (snID !== 0) {
      this.connSensorsService.getConnectedSensor(snID)
        .subscribe(sensor => {
          this.connectedSensor = sensor;
          this.isLoading = false;
        });
    }
  }
}
