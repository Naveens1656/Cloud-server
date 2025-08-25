import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  billings: any[] = [];
  newBilling: any = { code: '', description: '' };

  addBilling() {
    if (this.newBilling.code && this.newBilling.description) {
      this.billings.push({ ...this.newBilling });
      this.newBilling = { code: '', description: '' };
    }
  }

  deleteBilling(index: number) {
    this.billings.splice(index, 1);
  }
}
