import { Component } from '@angular/core';

@Component({
  selector: 'app-awb-sales-entry',
  templateUrl: './awb-sales-entry.component.html',
  styleUrls: ['./awb-sales-entry.component.css']
})
export class AwbSalesEntryComponent {
  newAwb: any = {
    number: '',
    shipper: '',
    consignee: '',
    origin: '',
    destination: '',
    weight: null,
    rate: null
  };

  awbList: any[] = [];

  addAwb() {
    if (this.newAwb.number) {
      this.awbList.push({ ...this.newAwb });
      this.newAwb = { number: '', shipper: '', consignee: '', origin: '', destination: '', weight: null, rate: null };
    }
  }

  removeAwb(index: number) {
    this.awbList.splice(index, 1);
  }
}
