import { Component } from '@angular/core';

@Component({
  selector: 'app-charge-name',
  templateUrl: './charge-name.component.html',
  styleUrls: ['./charge-name.component.css']
})
export class ChargeNameComponent {
  chargeNames: any[] = [];
  newCharge: any = { name: '', category: '' };

  addCharge() {
    if (this.newCharge.name && this.newCharge.category) {
      this.chargeNames.push({ ...this.newCharge });
      this.newCharge = { name: '', category: '' };
    }
  }

  deleteCharge(index: number) {
    this.chargeNames.splice(index, 1);
  }
}
