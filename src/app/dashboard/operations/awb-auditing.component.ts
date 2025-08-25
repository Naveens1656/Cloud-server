import { Component } from '@angular/core';

@Component({
  selector: 'app-awb-auditing',
  templateUrl: './awb-auditing.component.html',
  styleUrls: ['./awb-auditing.component.css']
})
export class AwbAuditingComponent {
  audits = [
    { awb: '123-4567890', checkedBy: 'John', remarks: 'All good', date: '2025-08-15' },
    { awb: '987-6543210', checkedBy: 'Mary', remarks: 'Missing docs', date: '2025-08-16' }
  ];
}

