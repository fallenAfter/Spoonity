import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UIRouterModule, StateService, UIRouter } from '@uirouter/angular';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
//
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UpcommingComponent } from './upcomming/upcomming.component';

export const States = [
	{name: 'home', url: '/', component: UpcommingComponent},
	{name: 'search', url: '/search', component: SearchComponent},
	{name: 'upcomming', url: '/upcomming', component: UpcommingComponent},

];

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		UIRouterModule.forRoot({states: States, useHash: false, otherwise: "/"}),
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		AppComponent,
		SearchComponent,
		UpcommingComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);