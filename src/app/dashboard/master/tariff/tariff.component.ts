import { Component } from '@angular/core';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent {
  tariffs = [
    { id: 1, name: 'Standard Tariff', rate: 1500 },
    { id: 2, name: 'Express Tariff', rate: 2500 },
  ];

  newTariff = { name: '', rate: null };

  addTariff() {
    if (this.newTariff.name && this.newTariff.rate) {
      const id = this.tariffs.length + 1;
      this.tariffs.push({ id, ...this.newTariff });
      this.newTariff = { name: '', rate: null };
    }
  }

  deleteTariff(id: number) {
    this.tariffs = this.tariffs.filter(t => t.id !== id);
  }
}
