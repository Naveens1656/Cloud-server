import { Component } from '@angular/core';

@Component({
  selector: 'app-client-tariff',
  templateUrl: './client-tariff.component.html',
  styleUrls: ['./client-tariff.component.css']
})
export class ClientTariffComponent {
  clientTariffs = [
    { id: 1, client: 'ABC Pvt Ltd', rate: 1800 },
    { id: 2, client: 'XYZ Logistics', rate: 2100 },
  ];

  newTariff = { client: '', rate: null };

  addClientTariff() {
    if (this.newTariff.client && this.newTariff.rate) {
      const id = this.clientTariffs.length + 1;
      this.clientTariffs.push({ id, ...this.newTariff });
      this.newTariff = { client: '', rate: null };
    }
  }

  deleteClientTariff(id: number) {
    this.clientTariffs = this.clientTariffs.filter(c => c.id !== id);
  }
}
