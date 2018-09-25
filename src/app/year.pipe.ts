import { Pipe, PipeTransform } from '@angular/core';
import { People } from './pipes-demo/pipes-demo.component';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(_people: People[], year: number) {
    return _people.filter(person => person.year == year);
  }

}