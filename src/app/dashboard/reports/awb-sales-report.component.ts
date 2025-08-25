import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SalesReport {
  awbNo: string;
  client: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-awb-sales-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awb-sales-report.component.html',
  styleUrls: ['./awb-sales-report.component.css']
})
export class AwbSalesReportComponent {
  salesData: SalesReport[] = [
    { awbNo: 'AWB001', client: 'ABC Logistics', amount: 1200, date: '2025-08-01' },
    { awbNo: 'AWB002', client: 'XYZ Shippers', amount: 950, date: '2025-08-05' },
    { awbNo: 'AWB003', client: 'Global Freight', amount: 1750, date: '2025-08-10' },
  ];

  get totalAmount(): number {
    return this.salesData.reduce((sum, item) => sum + item.amount, 0);
  }
}
