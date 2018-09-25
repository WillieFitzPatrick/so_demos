import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

export interface People {
  firstName: string;
  lastName: string;
  year: number;
  excused: boolean;
}

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent implements OnInit {
  people: People[];
  year: number = 2015;
  constructor() { }

  ngOnInit() {
    this.people = [
      {"firstName":"AAAA","lastName":"BBBBB","year": 2014,"excused": true},
      {"firstName":"AAAA","lastName":"BBBBB","year": 2014,"excused": false},
      {"firstName":"AAAA","lastName":"BBBBB","year": 2015,"excused": true},
      {"firstName":"AAAA","lastName":"BBBBB","year": 2015,"excused": false},
      {"firstName":"AAAA","lastName":"BBBBB","year": 2015,"excused": true},
      {"firstName":"AAAA","lastName":"BBBBB","year": 2015,"excused": true},
      {"firstName":"AAAA","lastName":"BBBBB","year": 2015,"excused": false},
    ]
  }

}
