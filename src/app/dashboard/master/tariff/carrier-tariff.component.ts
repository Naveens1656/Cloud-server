import { Component } from '@angular/core';

@Component({
  selector: 'app-carrier-tariff',
  templateUrl: './carrier-tariff.component.html',
  styleUrls: ['./carrier-tariff.component.css']
})
export class CarrierTariffComponent {
  carrierTariffs = [
    { id: 1, carrier: 'DHL', rate: 2000 },
    { id: 2, carrier: 'FedEx', rate: 2200 },
  ];

  newTariff = { carrier: '', rate: null };

  addCarrierTariff() {
    if (this.newTariff.carrier && this.newTariff.rate) {
      const id = this.carrierTariffs.length + 1;
      this.carrierTariffs.push({ id, ...this.newTariff });
      this.newTariff = { carrier: '', rate: null };
    }
  }

  deleteCarrierTariff(id: number) {
    this.carrierTariffs = this.carrierTariffs.filter(c => c.id !== id);
  }
}
