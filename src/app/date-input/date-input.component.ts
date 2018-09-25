import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  meeting = {"start": ''};
  constructor() { }

  ngOnInit() {
    var today = new Date();
    this.meeting.start = today.toISOString().split('.')[0];
  }
}