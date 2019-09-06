import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryComponent } from './summary/summary.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PaymentsComponent } from './payments/payments.component';
import { OffersComponent } from './offers/offers.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SummaryComponent,
    ActivitiesComponent,
    PaymentsComponent,
    OffersComponent,
    NotificationsComponent,
    BenefitsComponent,
    BreakdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
