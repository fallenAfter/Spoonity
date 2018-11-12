import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UIRouterModule } from "@uirouter/angular";
import { UIRouter } from "@uirouter/angular";
import { ApiService } from './api/api.service';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApiService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Upcomming Rocket Launches';
  searchForm: FormGroup;
  constructor(fb: FormBuilder){
  	function formatDate(d: Date){

  		let day:  number,
  		month: number,
  		year: number,
  		result: string;

  		day = d.getDate();
  		month = d.getMonth()+1;	//fixes off by one
  		year = d.getFullYear();
  		result = month+'-'+day+'-'+year
  		console.log(result);

  		return result;
  	}
  	this.searchForm = fb.group({
  		'startDate': [formatDate(new Date()), Validators.compose([Validators.required, Validators.pattern(/((?:1[0-2])|(?<!\d)[0-9])-([0-2][0-9]|[0-3][0-1]|[0-9])-\d\d\d\d(?!.)/)])],
  		'endDate': [formatDate(new Date()), Validators.compose([Validators.required, Validators.pattern(/((?:1[0-2])|(?<!\d)[0-9])-([0-2][0-9]|[0-3][0-1]|[0-9])-\d\d\d\d(?!.)/)])] ,
  		'countryCode': [null, Validators.compose([Validators.minLength(3), Validators.maxLength(3)])]
  	});
  }
  ngOnInit(){
  	//StateService.Go("search");
  	
  }

  submitSearch(form: any){
  	new UIRouter().stateService.go("search");
  }
  
}






