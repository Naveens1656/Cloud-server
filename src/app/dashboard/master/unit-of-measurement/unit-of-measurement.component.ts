import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-of-measurement',
  templateUrl: './unit-of-measurement.component.html',
  styleUrls: ['./unit-of-measurement.component.css']
})
export class UnitOfMeasurementComponent {
  units: { code: string; name: string; description: string }[] = [];
  newUnit: { code: string; name: string; description: string } = {
    code: '',
    name: '',
    description: ''
  };

  addUnit() {
    if (this.newUnit.code && this.newUnit.name) {
      this.units.push({ ...this.newUnit });
      this.newUnit = { code: '', name: '', description: '' };
    }
  }

  deleteUnit(index: number) {
    this.units.splice(index, 1);
  }
}
