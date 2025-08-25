import { Component } from '@angular/core';

@Component({
  selector: 'app-awb-view-modify',
  templateUrl: './awb-view-modify.component.html',
  styleUrls: ['./awb-view-modify.component.css']
})
export class AwbViewModifyComponent {
  awbs = [
    { number: '123-4567890', shipper: 'ABC Logistics', consignee: 'XYZ Imports', status: 'Confirmed' },
    { number: '987-6543210', shipper: 'Global Cargo', consignee: 'Retail Hub', status: 'Pending' }
  ];

  updateStatus(index: number, newStatus: string) {
    this.awbs[index].status = newStatus;
  }
}
