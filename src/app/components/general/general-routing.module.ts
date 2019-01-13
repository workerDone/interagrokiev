import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path : '',
    component : DefaultComponent
  },
  {
    path : 'contacts',
    component : ContactsComponent
  },
  {
    path : 'about-us',
    component : AboutUsComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
