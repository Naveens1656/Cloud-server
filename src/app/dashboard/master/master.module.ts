import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ Add this

import { MasterComponent } from './master.component';
import { BillingComponent } from './billing/billing.component';
import { ChargeNameComponent } from './billing/charge-name.component';
import { ChargeTypeComponent } from './billing/charge-type.component';
import { CurrencyComponent } from './currency/currency.component';
import { ItemHsEntryComponent } from './item-hs-entry/item-hs-entry.component';
import { CompanyComponent } from './organization/company.component';
import { DepartmentComponent } from './organization/department.component';
import { DesignationComponent } from './organization/designation.component';
import { OrganizationComponent } from './organization/organization.component';
import { PlaceComponent } from './place/place.component';


const routes: Routes = [
  { path: '', component: MasterComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'charge-name', component: ChargeNameComponent },
  { path: 'charge-type', component: ChargeTypeComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'item-hs-entry', component: ItemHsEntryComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'organization', component: OrganizationComponent },
];

@NgModule({
  declarations: [
    MasterComponent,
    BillingComponent,
    ChargeNameComponent,
    ChargeTypeComponent,
    CurrencyComponent,
    ItemHsEntryComponent,
    CompanyComponent,
    DepartmentComponent,
    DesignationComponent,
    PlaceComponent,
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,        // ✅ Added here
    RouterModule.forChild(routes)
  ]
})
export class MasterModule {}
