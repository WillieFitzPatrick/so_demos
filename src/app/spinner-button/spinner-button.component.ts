import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.css']
})
export class SpinnerButtonComponent implements OnInit {
  isWaiting = false;
  constructor() { }

  ngOnInit() {
  }

    getData() {
  this.isWaiting = true;
  setTimeout( () => this.isWaiting = false,3*1000)
  }

}