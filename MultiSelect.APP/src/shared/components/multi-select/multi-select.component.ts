import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/core/items.service';
import { HttpErrorResponse } from '@angular/common/http';

import { ItemsModel } from 'src/shared/models/items.model';
import { ListItemModel } from 'src/shared/models/list-item.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  items: Array<ListItemModel>;
  selectedItems: Array<string> = [];

  searchString = '';

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  onItemClick(index: number) {
    this.items = this.toggleItemSelection(this.items, index);
  }

  private getItems(): void {

    this.itemsService.getItems().subscribe(
      (response: ItemsModel) => {
        const itemNames = response.data;
        this.items = itemNames.map((itemName) => { return new ListItemModel(itemName, false) })
        console.log(this.items);

      },
      (error: HttpErrorResponse) => {
        // normally you throw an error here
        console.log(error.error);
      }
    )
  }

  private toggleItemSelection(items: Array<ListItemModel>, index: number, ): Array<ListItemModel> {
    const isSelected: boolean = items[index].isSelected;
    items[index].isSelected = !isSelected;

    return items;
  }

}
