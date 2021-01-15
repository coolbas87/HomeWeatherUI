import {Component, Input, OnInit} from '@angular/core';
import {TempHistoryItem} from '../temp-history-item';
import {TempHistoryService} from '../temp-history.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-temp-history',
  templateUrl: './temp-history.component.html',
  styleUrls: ['./temp-history.component.css']
})
export class TempHistoryComponent implements OnInit {
  @Input() from;
  @Input() to;
  @Input() id;

  readonly  ROW_CLASS_NAME = 'table-';
  history: TempHistoryItem[];

  constructor(private tempHistoryService: TempHistoryService, private route: ActivatedRoute) { }

  getRowColor(temperature: number): string {
    let clsName = '';

    if (temperature >= 30) {
      clsName = 'danger';
    } else if (temperature >= 15) {
      clsName = 'warning';
    } else if (temperature >= 0) {
      clsName = 'info';
    } else if (temperature >= -15) {
      clsName = 'primary';
    } else if (temperature >= -30) {
      clsName = 'purple';
    } else {
      clsName = 'light';
    }
    return this.ROW_CLASS_NAME + clsName;
  }

  ngOnInit(): void {
    this.from = !this.from ? moment().subtract(7, 'days').format('YYYY-MM-DD') : this.from;
    this.to = !this.to ? moment().format('YYYY-MM-DD') : this.to;
    this.getHistory();
  }

  private getHistory() {
    const id = this.route.snapshot.paramMap.get('snID');
    if (!id) {
      this.tempHistoryService.getTempHistory(this.from, this.to)
        .subscribe(history => {
          this.history = history;
          console.log(history);
        });
    } else {
      this.tempHistoryService.getTempHistoryByID(+id, this.from, this.to)
        .subscribe(history => {
          this.history = history;
          console.log(history);
        });
    }
  }
}
