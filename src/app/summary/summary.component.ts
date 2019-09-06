import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

	payments = [
		{
			date: "Sep 2",
			name: "Amazon.com",
			amt: 100.89,
			payment: 0
		},
		{
			date: "Sep 2",
			name: "McDonald's",
			amt: 6.82,
			payment: 0
		},
		{
			date: "Sep 2",
			name: "7-Eleven",
			amt: 23.41,
			payment: 0
		},
		{
			date: "Sep 2",
			name: "Arby's",
			amt: 10.33,
			payment: 0
		},
		{
			date: "Sep 2",
			name: "AWS",
			amt: 3.14,
			payment: 0
		},
		{
			date: "Sep 3",
			name: "Amazon.com",
			amt: 36.99,
			payment: 0
		},
		{
			date: "Sep 3",
			name: "Payment - Thank you",
			amt: 20.89,
			payment: 1
		},
		{
			date: "Sep 3",
			name: "Amazon.com",
			amt: 30.89,
			payment: 0
		},
		{
			date: "Sep 4",
			name: "ebay.com",
			amt: 100.89,
			payment: 0
		},
		{
			date: "Sep 4",
			name: "Whataburger",
			amt: 10.89,
			payment: 0
		},
		{
			date: "Sep 4",
			name: "Zoro",
			amt: 78.89,
			payment: 0
		},
		{
			date: "Sep 4",
			name: "McDonald's",
			amt: 6.82,
			payment: 0
		},
		{
			date: "Sep 4",
			name: "7-Eleven",
			amt: 23.41,
			payment: 0
		},
		{
			date: "Sep 4",
			name: "Arby's",
			amt: 10.33,
			payment: 0
		},
		{
			date: "Sep 5",
			name: "AWS",
			amt: 3.14,
			payment: 0
		},
		{
			date: "Sep 5",
			name: "Amazon.com",
			amt: 36.99,
			payment: 0
		},
		{
			date: "Sep 5",
			name: "Payment - Thank you",
			amt: 40.89,
			payment: 1
		},
		{
			date: "Sep 5",
			name: "Amazon.com",
			amt: 30.83,
			payment: 0
		},
		{
			date: "Sep 5",
			name: "ebay.com",
			amt: 100.39,
			payment: 0
		},
		{
			date: "Sep 5",
			name: "Payment - Thank you",
			amt: 100.02,
			payment: 1
		},
		{
			date: "Sep 5",
			name: "Zoro",
			amt: 78.89,
			payment: 0
		}
	].reverse();

	userName = "Joseph";
  constructor() { }

  ngOnInit() {
  }

}
