import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select.component';
import { ItemsService } from '../../../core/items.service';
import { of, Observable } from 'rxjs';
import { ItemsModel } from 'src/shared/models/items.model';

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
      declarations: [
        MultiSelectComponent
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
