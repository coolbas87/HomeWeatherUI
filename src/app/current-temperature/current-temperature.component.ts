import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { CurrentTempService } from '../current-temp.service';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css']
})

export class CurrentTemperatureComponent implements OnInit {
  readonly chunk = 4;
  sensors: Sensor[];
  groupedSensors: Sensor[][];

  constructor(private curTempService: CurrentTempService) { }

  ngOnInit(): void {
    this.getSensors();
  }

  groupArray<T>(data: Array<T>, chunk: number): Array<T[]> {
    let group = new Array<T[]>();
​
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= chunk && i % chunk === 0)
        j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
​
    return group;
  }

  private getSensors(): void {
    this.curTempService.getTemperatures()
      .subscribe(sensors => {
        this.sensors = sensors;
        this.groupedSensors = this.groupArray(sensors, this.chunk);
      });
  }
}
