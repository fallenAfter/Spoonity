import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular'

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
  	BrowserModule,
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
