import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PaymentsComponent } from './payments/payments.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
	{path: '', component: SummaryComponent},
	{path: 'activities', component: ActivitiesComponent},
	{path: 'payments', component: PaymentsComponent},
	{path: 'offers', component: OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
