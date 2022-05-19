import { Person } from './../person';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:Person[], arg1:string, desc:boolean): Person[] {
    if(value) {
      return value.sort((a:Person, b:Person) => {
        if(a[arg1] < b[arg1]) {
          return desc === false ? -1 : 1;
        }
        else if(a[arg1] > b[arg1]) {
          return desc === false ? 1 : -1;
        }

        return 0;
      })
    }
  }

}
