import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-mat-button',
  templateUrl: './generic-mat-button.component.html',
  styleUrls: ['./generic-mat-button.component.css']
})
export class GenericMatButtonComponent implements OnInit {
  @Input() btnTxt: string; 
  @Input() btnIcon: string; 
  @Input() btnColor: string; 

  constructor() { 
  }

  ngOnInit() {
  }

}