import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { ItemsModel } from 'src/shared/models/items.model.js';

import items from '../../../MultiSelect.API/items/items.json';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private URL = 'url to api';

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<ItemsModel> {
    return of(items)

    // normally you would set the url to an (mock)API here, for this exercise I chose to import the json directly 
    /* return this.http.get<Array<string>>(this.URL); */
  }
}
