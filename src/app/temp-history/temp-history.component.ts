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

  public loading = false;
  public history: TempHistoryItem[];
  @Input() id;
  @Input() dateFrom: Date;
  @Input() dateTo: Date;

  constructor(private tempHistoryService: TempHistoryService, private route: ActivatedRoute) {
    const from = sessionStorage.getItem('dateFrom');
    const to = sessionStorage.getItem('dateTo');
    if (from == null)
    {
      this.dateFrom = moment().subtract(7, 'days').toDate();
      sessionStorage.setItem('dateFrom', this.dateFrom.toISOString());
    }
    else
    {
      this.dateFrom = moment(from).toDate();
    }
    if (to == null)
    {
      this.dateTo = moment().toDate();
      sessionStorage.setItem('dateTo', this.dateTo.toISOString());
    }
    else
    {
      this.dateTo = moment(to).toDate();
    }
  }

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

  private getHistory(): void {
    this.loading = true;
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
    this.loading = false;
  }

  public isShowChart(): boolean {
    return (this.id != null) && (this.history != null);
  }

  public onShowClick(): void {
    this.getHistory();
  }
}
