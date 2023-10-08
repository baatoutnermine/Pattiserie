import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CarteComponent } from './carte/carte.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TabSweetsComponent } from './tab-sweets/tab-sweets.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"detail",component:DetailComponent},
  {path:"about",component:AboutComponent},
  {path:"menu",component:MenuComponent},
  {path:"carte", component:CarteComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"admin", component:TabSweetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
