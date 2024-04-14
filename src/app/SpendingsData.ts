export class SpendingsData {
  dayShort: string;
  dayLong: string;
  amount: number;

  constructor(dayShort: string, dayLong: string, amount: number) {
    this.dayShort = dayShort;
    this.dayLong = dayLong;
    this.amount = amount;
  }
}
