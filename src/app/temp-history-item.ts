import {DbSensor} from './db-sensor';

export interface TempHistoryItem {
  thID: number;
  snID: number;
  sensors: DbSensor;
  temperature: number;
  date: Date;
}
