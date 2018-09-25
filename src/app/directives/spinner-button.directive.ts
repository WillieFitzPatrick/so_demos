import { Directive, Input, OnChanges } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[spinnerButton]'
})
export class SpinnerButtonDirective {
@Input('spinnerButton') isWaiting: boolean
  originalInnerText : string;
  constructor( private el: ElementRef ) { 
  }

  ngOnInit(){
    this.originalInnerText = this.el.nativeElement.innerText;
  }

  ngOnChanges() {
    console.log(this.el.nativeElement.value)
    if (this.isWaiting) {
      this.el.nativeElement.innerText = 'waiting...';
    } else {
      if (this.el.nativeElement.innerText == 'waiting...') {
        this.el.nativeElement.innerText = this.originalInnerText;
      }
    }
    this.el.nativeElement.disabled = this.isWaiting;
  }
}