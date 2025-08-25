import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  title = 'Organization Master';

  // dummy data (replace with API later)
  organizations = [
    { id: 1, name: 'ABC Group', address: 'Chennai, India' },
    { id: 2, name: 'XYZ Enterprises', address: 'Bangalore, India' }
  ];
}
