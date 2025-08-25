import { Component } from '@angular/core';

@Component({
  selector: 'app-charge-type',
  templateUrl: './charge-type.component.html',
  styleUrls: ['./charge-type.component.css']
})
export class ChargeTypeComponent {
  chargeTypes: any[] = [];
  newType: any = { name: '', description: '' };

  addType() {
    if (this.newType.name && this.newType.description) {
      this.chargeTypes.push({ ...this.newType });
      this.newType = { name: '', description: '' };
    }
  }

  deleteType(index: number) {
    this.chargeTypes.splice(index, 1);
  }
}
