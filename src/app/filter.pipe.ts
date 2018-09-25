
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'filter'
})

  export class FilterPipe implements PipeTransform {

  transform(items: any, selectOpt?: any): any {
    return (selectOpt && selectOpt != 'Select Team') ? items.filter(opt => opt.team_id === selectOpt) : items;
  }
}