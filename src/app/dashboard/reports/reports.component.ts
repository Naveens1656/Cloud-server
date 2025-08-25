import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports: any[] = [
    { title: 'Sales Report', date: '2025-08-01' },
    { title: 'Inventory Report', date: '2025-08-15' }
  ];
}
