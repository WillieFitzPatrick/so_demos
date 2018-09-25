import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-function',
  templateUrl: './button-function.component.html',
  styleUrls: ['./button-function.component.css']
})
export class ButtonFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPreviousClick(id: number, index: number) {
   console.log(id);
  }

  onNextClick() {
   console.log('next');
  }

}