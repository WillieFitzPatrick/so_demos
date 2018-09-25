import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
 xForm: FormGroup;
 sbs: Subscription;

  constructor( private fb: FormBuilder ) { }
  ngOnInit() {
    this.xForm = this.fb.group( {
      Importe: ['']

    })
    this.sbs = this.xForm.get('Importe').valueChanges.subscribe( x => this.onlyNumbers(x));
  }

  onlyNumbers( value ){
    console.log(value)
  }

  formatImporte(  ){
    let control = this.xForm.get("Importe");
    if (control){
      let importe = control.value;
      importe=importe.replace(",",".");
      //console.log(importe);
      let _formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(importe);
      //console.log(_formatted);
      _formatted = _formatted == "NaN" ? "" : _formatted;
      control.patchValue(_formatted, {emitEvent: false});
    }
  }
  unformatImporte(  ){
    let control = this.xForm.get("Importe");
    if (control){
      let importe = control.value;
      if (importe){
        importe=importe.replace("$","");
        importe=importe.replace(",","");
        //console.log(importe);

        let _formatted = importe;
        _formatted = _formatted == "NaN" ? "" : _formatted;

        control.patchValue(_formatted, {emitEvent: false});
      }
    }
  }


  

}