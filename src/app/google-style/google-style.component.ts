import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-style',
  templateUrl: './google-style.component.html',
  styleUrls: ['./google-style.component.css']
})
export class GoogleStyleComponent implements OnInit {
  menu = ['Item 1', 'Item 2'];
  constructor() { }

  ngOnInit() {
  }

}