import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/core/items.service';
import { HttpErrorResponse } from '@angular/common/http';

import { ItemsModel } from 'src/shared/models/items.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  items: Array<string>

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  private getItems(): void {

    this.itemsService.getItems().subscribe(
      (response: ItemsModel) => {
        this.items = response.data;
      },
      (error: HttpErrorResponse) => {
        // normal throw an error here
        console.log(error.error);
      }
    )
  }
}
