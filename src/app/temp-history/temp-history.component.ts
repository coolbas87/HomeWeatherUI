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
  data: Date[];

  readonly  ROW_CLASS_NAME = 'table-';
  readonly  DATE_FORMAT = 'YYYY-MM-DD';
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
    this.setDefaultDates();
    this.getHistory();
  }

  private setDefaultDates(): void {
    this.from = !this.from ? moment().subtract(7, 'days').format(this.DATE_FORMAT) : this.from;
    this.to = !this.to ? moment().format(this.DATE_FORMAT) : this.to;
  }

  private getHistory() {
    const id = this.route.snapshot.paramMap.get('snID');
    if (!id) {
      this.tempHistoryService.getTempHistory(this.from, this.to)
        .subscribe(history => {
          this.history = history;
        });
    } else {
      this.tempHistoryService.getTempHistoryByID(+id, this.from, this.to)
        .subscribe(history => {
          this.history = history;
        });
    }
  }

  public onShowClick(): void {
    this.getHistory();
  }

  public onDateChange(dates: Date[]): void {
    if ((!dates) || (dates.length !== 2)) {
      this.from = null;
      this.to = null;
      this.setDefaultDates();
    } else {
      this.from = moment(dates[0]).format(this.DATE_FORMAT);
      this.to = moment(dates[1]).format(this.DATE_FORMAT);
    }
  }
}
