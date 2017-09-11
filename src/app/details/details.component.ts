import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayDetails = false;
  displayDetailsClicks = [];
  displayDetailsClicksCounter = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.displayDetailsClicksCounter++;
    this.displayDetailsClicks.push(this.displayDetailsClicksCounter);
  }
}
