import { Component, OnInit } from '@angular/core';
import { SpendingsData } from '../SpendingsData';
import * as SpendData from '../../assets/data.json';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css'],
})
export class SpendingComponent {
  daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  week: SpendingsData[] = [];
  maxValue: number = 0;
  dow = new Date().getDay();

  constructor() {
    this.week = this.parseJSON();
  }

  parseJSON(): SpendingsData[] {
    this.maxValue = 0;
    let data: SpendingsData[] = [];
    let entries = Object.entries(SpendData);
    let i = 0;
    for (let keys of entries) {
      if (!Number.isNaN(Number.parseInt(keys[0]))) {
        data.push(
          new SpendingsData(keys[1].dayShort, keys[1].dayLong, keys[1].amount)
        );
        if (this.maxValue < keys[1].amount) {
          this.maxValue = keys[1].amount;
        }
        i++;
      }
    }
    return data;
  }

  columnHeight(amount: number) {
    return (amount / this.maxValue) * 100;
  }

  isToday(dayShort: string): boolean {
    return dayShort === this.daysOfWeek[this.dow];
  }
}
