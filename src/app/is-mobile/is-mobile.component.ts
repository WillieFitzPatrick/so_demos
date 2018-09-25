import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-mobile',
  templateUrl: './is-mobile.component.html',
  styleUrls: ['./is-mobile.component.css']
})
export class IsMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i
            .test(navigator.userAgent));
  }

}