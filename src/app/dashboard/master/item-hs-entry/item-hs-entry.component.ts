import { Component } from '@angular/core';

@Component({
  selector: 'app-item-hs-entry',
  templateUrl: './item-hs-entry.component.html',
  styleUrls: ['./item-hs-entry.component.css']
})
export class ItemHsEntryComponent {
  hsEntries = [
    { code: '0101.21', description: 'Pure-bred breeding animals', dutyRate: '5%' },
    { code: '0201.30', description: 'Meat of bovine animals, boneless', dutyRate: '10%' }
  ];

  newEntry = { code: '', description: '', dutyRate: '' };
  editIndex: number | null = null;

  addOrUpdateEntry() {
    if (this.editIndex === null) {
      this.hsEntries.push({ ...this.newEntry });
    } else {
      this.hsEntries[this.editIndex] = { ...this.newEntry };
      this.editIndex = null;
    }
    this.newEntry = { code: '', description: '', dutyRate: '' };
  }

  editEntry(index: number) {
    this.newEntry = { ...this.hsEntries[index] };
    this.editIndex = index;
  }

  deleteEntry(index: number) {
    this.hsEntries.splice(index, 1);
  }
}
