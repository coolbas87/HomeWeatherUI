import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TempHistoryItem} from '../../interfaces/temp-history-item';
import * as moment from 'moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() history: TempHistoryItem[];
  chartHistory: any[];

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public data = {
    labels: [],
    datasets: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareData();
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private getDataset(index): object {
    const color = this.getRandomColor();
    return {
      label: this.chartHistory[index].name,
      fill: false,
      lineTension: 0.1,
      borderColor: color,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: color,
      pointBackgroundColor: color,
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: this.chartHistory[index].temps
    };
  }

  private getSensorsHistoryForGraphic(): any[] {
    const retArr = [];
    if (this.history) {
      const historyObj = this.history.reduce((r, obj, currentIndex, array) => {
        const name = obj.sensors.name + ' | ' + obj.sensors.rom;
        if (!(r[name])) {
          r[name] = {
            dates: [moment(obj.date).format('DD.MM.YYYY HH:mm:ss')],
            temps: [obj.temperature]
          };
        } else {
          r[name].dates = [...r[name].dates || [], moment(obj.date).format('DD.MM.YYYY HH:mm:ss')];
          r[name].temps = [...r[name].temps || [], obj.temperature];
        }
        return r;
      }, {});

      for (const [key, value] of Object.entries(historyObj)) {
        value['name'] = key;
        retArr.push(value);
      }
    }
    return retArr;
  }

  public prepareData(): void {
    this.chartHistory = this.getSensorsHistoryForGraphic();

    if ((this.chartHistory == null) || (this.chartHistory.length === 0)) {
      this.data.datasets = [];
      this.data.labels = [];
      return;
    }

    for (let i = 0; i < this.chartHistory.length; i++) {
      this.data.datasets.push(this.getDataset(i));
    }

    this.data.labels = this.chartHistory[0].dates;
  }

}
