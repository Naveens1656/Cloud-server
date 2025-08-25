import { Component } from '@angular/core';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent {
  title = 'Designation Master';

  designations = [
    { id: 1, name: 'Manager' },
    { id: 2, name: 'Accountant' },
    { id: 3, name: 'Driver' }
  ];
}
