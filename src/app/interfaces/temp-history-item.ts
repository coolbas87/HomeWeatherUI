import {DbSensorModel} from './db-sensor.model';

export interface TempHistoryItem {
  thID: number;
  snID: number;
  sensors: DbSensorModel;
  temperature: number;
  date: Date;
}
