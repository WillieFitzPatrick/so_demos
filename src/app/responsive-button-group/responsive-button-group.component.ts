import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-responsive-button-group',
  templateUrl: './responsive-button-group.component.html',
  styleUrls: ['./responsive-button-group.component.css']
})
export class ResponsiveButtonGroupComponent implements OnInit {

  watcher: Subscription;
  activeMediaQuery = "";
  showButtonGroup: boolean = true;
  constructor(private media: ObservableMedia) {
  }
  ngOnInit() {
    let _mode = ('buttonGroup');
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.showButtonGroup = !(change.mqAlias == 'sm' || change.mqAlias == 'xs') && (_mode === 'buttonGroup');
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}