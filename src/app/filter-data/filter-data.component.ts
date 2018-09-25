import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {
selectOpt;
  teams = [
    {"team_id":"AAA","team_name": "Team AAA"},
    {"team_id":"BBB","team_name": "Team BBB"},
    {"team_id":"CCC","team_name": "Team CCC"}];
  passwords = [
    {"team_id":"AAA","team_name": "Team AAA","url":"","username":"user 1","password":"111"},
    {"team_id":"AAA","team_name": "Team AAA","url":"","username":"user 2","password":"222"},
    {"team_id":"BBB","team_name": "Team BBB","url":"","username":"user 3","password":"333"},
    {"team_id":"BBB","team_name": "Team BBB","url":"","username":"user 4","password":"444"},
    {"team_id":"CCC","team_name": "Team CCC","url":"","username":"user 5","password":"555"}];
  constructor() { }

  ngOnInit() {
  }

}