import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  title = 'Company Master';

  companies = [
    { id: 1, name: 'ABC Pvt Ltd', gst: '29ABCDE1234F2Z5', location: 'Chennai' },
    { id: 2, name: 'XYZ Ltd', gst: '07XYZDE5678P1Z9', location: 'Delhi' }
  ];
}
