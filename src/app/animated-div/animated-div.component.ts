import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animated-div',
  templateUrl: './animated-div.component.html',
  styleUrls: ['./animated-div.component.css'],
  animations: [
    trigger('divState', [
        //state('show', style({ transform: 'translateY(0)'})),
        //state('hide', style({ transform: 'translateY(-140%)'})),
        state('show', style({ transform: 'translateX(0)'})),
        state('hide', style({ transform: 'translateX(140%)'})),
        transition('show => hide', animate('500ms ease-out')),
        transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class AnimatedDivComponent implements OnInit {

  //store the state of the div
  divState: string = "hide";

  constructor() { }

  ngOnInit() {
  }

  showDiv(){
    this.divState = (this.divState == 'hide') ? 'show' : 'hide';
  }
  
  closeMe(){
    this.divState = 'hide';
  }

}