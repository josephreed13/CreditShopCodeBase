import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-summary',
  	templateUrl: './summary.component.html',
  	styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

	// array of objects storing payments
	payments = [
		{date: "Sep 2",name: "Amazon.com",amt: 100.89,payment: 0},
		{date: "Sep 2",name: "McDonald's",amt: 6.82,payment: 0},
		{date: "Sep 2",name: "7-Eleven",amt: 23.41,payment: 0},
		{date: "Sep 2",name: "Arby's",amt: 10.33,payment: 0},
		{date: "Sep 2",name: "AWS",amt: 3.14,payment: 0},
		{date: "Sep 3",name: "Amazon.com",amt: 36.99,payment: 0},
		{date: "Sep 3",name: "Payment - Thank you",amt: 20.89,payment: 1},
		{date: "Sep 3",name: "Amazon.com",amt: 30.89,payment: 0},
		{date: "Sep 4",name: "ebay.com",amt: 100.89,payment: 0},
		{date: "Sep 4",name: "Whataburger",amt: 10.89,payment: 0},
		{date: "Sep 4",name: "Zoro",amt: 78.89,payment: 0},
		{date: "Sep 4",name: "McDonald's",amt: 6.82,payment: 0},
		{date: "Sep 5",name: "Amazon.com",amt: 36.99,payment: 0},
		{date: "Sep 4",name: "7-Eleven",amt: 23.41,payment: 0},
		{date: "Sep 5",name: "Payment - Thank you",amt: 40.89,payment: 1},
		{date: "Sep 4",name: "Arby's",amt: 10.33,payment: 0},
		{date: "Sep 5",name: "AWS",amt: 3.14,payment: 0},
		{date: "Sep 5",name: "Payment - Thank you",amt: 100.02,payment: 1},
		{date: "Sep 5",name: "X-Large Coffee",amt: 30.83,payment: 0},
		{date: "Sep 5",name: "Haircut (Pending)",amt: 24.99,payment: 0},
		{date: "Sep 5",name: "Next Interview (Pending)",amt: 8.85,payment: 0}
	].reverse(); // chronological


	userName = "Joseph";

	paymentForm: FormGroup;
	amount = 0;
	description = "";
	newPayment = {};

	submitted = false;
	success = false;


	// status
	benefits = false;
	breakdown = false;
	notifications = false;
	offers = false;
  	makePayment = false;

	constructor(private formBuilder: FormBuilder, private data: DataService) { }

  	ngOnInit() {
  		this.paymentForm = this.formBuilder.group({
  			amount: ['', Validators.required],
  			description: ['', Validators.required]
  		});

  		this.data.currentBenefits.subscribe(benefits => this.benefits = benefits);
	  	this.data.currentBreakdown.subscribe(breakdown => this.breakdown = breakdown);
	  	this.data.currentNotifications.subscribe(notifications => this.notifications = notifications);
	  	this.data.currentOffers.subscribe(offers => this.offers = offers);
  	}

  	getBalance() {
  		var total = 0;
  		for (let a of this.payments) {
  			if(!a.payment)
  				total += a.amt;
  			else 
  				total -= a.amt;
  		} 

  		let t = total.toFixed(2);
  		return t;
  	}

  	currentBalance = this.getBalance();

  	paymentBtnClick() {
  		this.makePayment = !this.makePayment;
  		console.log("click");
  	}

  	onSubmit() {
  		this.submitted = true;

  		if(this.paymentForm.invalid) {
  			return;
  		}

  		this.success = true;
  		this.amount = this.paymentForm.get('amount').value;
  		this.description = this.paymentForm.get('description').value;
  		// clear form
  		this.paymentForm.reset();
  		this.makePayment = !this.makePayment
  		let newPayment = {date: "Sep 8", name: this.description, amt: this.amount, payment: 1};
  		this.payments.reverse(); // reverse order
  		this.payments.push(newPayment); // add chronologically
  		this.payments.reverse(); // reverse order

  		this.currentBalance = this.getBalance();

  	}

}
