import { Pipe, PipeTransform } from '@angular/core';
import { ListItemModel } from '../models/list-item.model';
@Pipe({
  name: 'filter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(items: Array<ListItemModel>, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}