import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { UpcommingComponent } from './upcomming.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
	],
	declarations: [
		UpcommingComponent,
	],
	providers: [],
	bootstrap: [UpcommingComponent]
})
export class UpcommingModule { }



//platformBrowserDynamic().bootstrapModule(UpcommingModule);