import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

	benefits: boolean;
	breakdown: boolean;
	notifications: boolean;
	offers: boolean;


  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.currentBenefits.subscribe(benefits => this.benefits = benefits);
  	this.data.currentBreakdown.subscribe(breakdown => this.breakdown = breakdown);
  	this.data.currentNotifications.subscribe(notifications => this.notifications = notifications);
  	this.data.currentOffers.subscribe(offers => this.offers = offers);
  }


  changeStatus(name: string) {
  	if(name == "benefits") {
  		this.data.changeBenefits();
  	} else if(name == "breakdown") {
  		this.data.changeBreakdown();
  	}
  	else if(name == "notifications") {
  		this.data.changeNotifications();
  	}
  	else {
  		this.data.changeOffers();
  	}
  }

}
