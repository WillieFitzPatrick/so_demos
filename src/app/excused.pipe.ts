import { Pipe, PipeTransform } from '@angular/core';
import { People } from './pipes-demo/pipes-demo.component';

@Pipe({
  name: 'excused'
})
export class ExcusedPipe implements PipeTransform {

  transform(_people: People[], excused: string) {
    if (excused === 'yes'){
       return _people.filter(person => person.excused);
    }else{
       return _people.filter(person => !person.excused);
    }
  }

}