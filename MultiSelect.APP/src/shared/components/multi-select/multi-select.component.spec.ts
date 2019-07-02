import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { ItemsService } from '../../../core/items.service';

import { ItemsModel } from 'src/shared/models/items.model';

import { ItemFilterPipe } from 'src/shared/pipes/item-filter.pipe';
import { MultiSelectComponent } from './multi-select.component';

class MockItemsService {

  getItems(): Observable<ItemsModel> {
    const mockItems = ['foo', 'bar'];

    return of(new ItemsModel(mockItems))
  }
}

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        MultiSelectComponent,
        ItemFilterPipe
      ],
      providers: [
        { provide: ItemsService, useClass: MockItemsService }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load a list of item, when initialised', () => {
    expect(component.items.length).toBe(2);
    expect(component.items[0]).toBe('foo');
    expect(component.items[1]).toBe('bar');
  });
});
