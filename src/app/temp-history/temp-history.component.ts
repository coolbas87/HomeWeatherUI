import {Component, Input, OnInit} from '@angular/core';
import {TempHistoryItem} from '../interfaces/temp-history-item';
import {TempHistoryService} from '../services/temp-history.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-temp-history',
  templateUrl: './temp-history.component.html',
  styleUrls: ['./temp-history.component.css']
})
export class TempHistoryComponent implements OnInit {
  readonly TEXT_CLASS_NAME = 'text-';
  readonly DATE_FORMAT = 'YYYY-MM-DD';
  readonly USER_DATE_FORMAT = 'DD.MM.YYYY';

  history: TempHistoryItem[];

  get dateFrom(): any {
    const from = sessionStorage.getItem('from');
    return from != null ? from : moment().subtract(7, 'days').format(this.DATE_FORMAT);
  }
  @Input() set dateFrom(value: any) {
    sessionStorage.setItem('from', moment(value).format(this.DATE_FORMAT));
  }

  get dateTo(): any {
    const to = sessionStorage.getItem('to');
    return to != null ? to : moment().format(this.DATE_FORMAT);
  }
  @Input() set dateTo(value: any) {
    sessionStorage.setItem('to', moment(value).format(this.DATE_FORMAT));
  }

  get dateFromForView(): Date {
    return moment(this.dateFrom, this.DATE_FORMAT).toDate();
  }

  get dateToForView(): Date {
    return moment(this.dateTo, this.DATE_FORMAT).toDate();
  }

  @Input() id;

  constructor(private tempHistoryService: TempHistoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('snID');
    this.getHistory();
  }

  getTextColor(temperature: number): string {
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
      clsName = 'secondary';
    } else {
      clsName = 'light';
    }
    return this.TEXT_CLASS_NAME + clsName;
  }

  private getHistory() {
    if (!this.id) {
      this.tempHistoryService.getTempHistory(this.dateFrom, this.dateTo)
        .subscribe(history => {
          this.history = history;
        });
    } else {
      this.tempHistoryService.getTempHistoryByID(+this.id, this.dateFrom, this.dateTo)
        .subscribe(history => {
          this.history = history;
        });
    }
  }

  public isShowChart(): boolean {
    return (this.id != null) && (this.history != null);
  }

  public onShowClick(): void {
    this.getHistory();
  }

  public onDateFromChange(date: Date): void {
    if (!date) {
      this.dateFrom = null;
    } else {
      this.dateFrom = date;
    }
  }

  public onDateToChange(date: Date): void {
    if (!date) {
      this.dateTo = null;
    } else {
      this.dateTo = date;
    }
  }
}
