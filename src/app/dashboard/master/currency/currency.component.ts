import { Component } from '@angular/core';

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' }
  ];

  newCurrency: Currency = { code: '', name: '', symbol: '' };

  addCurrency() {
    if (this.newCurrency.code && this.newCurrency.name && this.newCurrency.symbol) {
      this.currencies.push({ ...this.newCurrency });
      this.newCurrency = { code: '', name: '', symbol: '' };
    }
  }

  removeCurrency(index: number) {
    this.currencies.splice(index, 1);
  }
}
