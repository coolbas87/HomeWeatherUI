import { Component, OnInit } from '@angular/core';
import { SensorModel } from '../interfaces/sensor.model';
import { CurrentTempService } from '../services/current-temp.service';
import {groupArray} from '../common/common-functions';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})

export class CurrentTemperatureComponent implements OnInit {
  readonly chunk = 4;
  sensors: SensorModel[];
  groupedSensors: SensorModel[][];

  constructor(private curTempService: CurrentTempService) { }

  ngOnInit(): void {
    this.getSensors();
  }

  private getSensors(): void {
    this.curTempService.getTemperatures()
      .subscribe(sensors => {
        this.sensors = sensors;
        this.groupedSensors = groupArray(sensors, this.chunk);
      });
  }
}
