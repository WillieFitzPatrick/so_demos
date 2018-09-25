import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cache-some-data',
  templateUrl: './cache-some-data.component.html',
  styleUrls: ['./cache-some-data.component.css']
})
export class CacheSomeDataComponent implements OnInit {
  data;
  constructor( private ds: DataService) { }

  ngOnInit() {

    this.getData();

  }

  getData(){
    this.data = [];
    this.ds.getData().subscribe(
      data => {
        this.data = data;
      }
    )
  }

}