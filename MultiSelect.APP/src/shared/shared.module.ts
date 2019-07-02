import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItemFilterPipe } from './pipes/item-filter.pipe';

@NgModule({
  declarations: [
    MultiSelectComponent,
    ItemFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    MultiSelectComponent,
    FormsModule,
    ItemFilterPipe
  ]
})
export class SharedModule { }
