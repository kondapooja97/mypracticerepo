import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchedValue: any): any {
    console.log('value', data);
    console.log('args', searchedValue);

    if(!searchedValue){
      return data;
    }

    let valueTobesearched = searchedValue.toLowerCase();
    return data.filter((item: any) => {
    return JSON.stringify(item).toLowerCase().includes(valueTobesearched)
    })

  }
  // return null;
}
