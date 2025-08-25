import { Component } from '@angular/core';

@Component({
  selector: 'app-shipper-tariff',
  templateUrl: './shipper-tariff.component.html',
  styleUrls: ['./shipper-tariff.component.css']
})
export class ShipperTariffComponent {
  shipperTariffs = [
    { id: 1, shipper: 'Global Shippers', rate: 1700 },
    { id: 2, shipper: 'Oceanic Freight', rate: 1950 },
  ];

  newTariff = { shipper: '', rate: null };

  addShipperTariff() {
    if (this.newTariff.shipper && this.newTariff.rate) {
      const id = this.shipperTariffs.length + 1;
      this.shipperTariffs.push({ id, ...this.newTariff });
      this.newTariff = { shipper: '', rate: null };
    }
  }

  deleteShipperTariff(id: number) {
    this.shipperTariffs = this.shipperTariffs.filter(s => s.id !== id);
  }
}
