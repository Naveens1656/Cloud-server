import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PrintReport {
  awbNo: string;
  client: string;
  status: string;
  printDate: string;
}

@Component({
  selector: 'app-awb-print-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awb-print-report.component.html',
  styleUrls: ['./awb-print-report.component.css']
})
export class AwbPrintReportComponent {
  printData: PrintReport[] = [
    { awbNo: 'AWB001', client: 'ABC Logistics', status: 'Printed', printDate: '2025-08-01' },
    { awbNo: 'AWB002', client: 'XYZ Shippers', status: 'Pending', printDate: '-' },
    { awbNo: 'AWB003', client: 'Global Freight', status: 'Printed', printDate: '2025-08-10' },
  ];
}
