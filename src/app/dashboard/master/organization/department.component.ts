import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  title = 'Department Master';

  departments = [
    { id: 1, name: 'Finance' },
    { id: 2, name: 'Logistics' },
    { id: 3, name: 'Operations' }
  ];
}
