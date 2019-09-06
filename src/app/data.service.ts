import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

	private benefits = new BehaviorSubject(false);
	currentBenefits = this.benefits.asObservable();
	private breakdown = new BehaviorSubject(false);
	currentBreakdown = this.breakdown.asObservable();
	private notifications = new BehaviorSubject(false);
	currentNotifications = this.notifications.asObservable();
	private offers = new BehaviorSubject(false);
	currentOffers = this.offers.asObservable();

  	constructor() { }

  	changeBenefits() {
		this.benefits.next(!this.benefits.value);
  	}

  	changeBreakdown() {
		this.breakdown.next(!this.breakdown.value);

  	}
  	changeNotifications() {
		this.notifications.next(!this.notifications.value);
  	}
  	changeOffers() {
		this.offers.next(!this.offers.value);
  	}

}
