import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
    
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    MultiSelectComponent,
  ]
})
export class SharedModule { }
