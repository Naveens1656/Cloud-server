import { Component } from '@angular/core';

@Component({
  selector: 'app-awb-delete',
  templateUrl: './awb-delete.component.html',
  styleUrls: ['./awb-delete.component.css']
})
export class AwbDeleteComponent {
  awbs = [
    { number: '123-4567890', shipper: 'ABC Logistics' },
    { number: '987-6543210', shipper: 'Global Cargo' }
  ];

  deleteAwb(index: number) {
    this.awbs.splice(index, 1);
  }
}

