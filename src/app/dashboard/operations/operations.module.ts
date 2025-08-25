import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OperationsComponent } from './operations.component';

const routes: Routes = [
  { path: '', component: OperationsComponent }
];

@NgModule({
  declarations: [OperationsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class OperationsModule {}
