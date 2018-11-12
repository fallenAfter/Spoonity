import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Launches, Launch } from '../data/launches';
import { Rocket} from '../data/launches';



@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  providers: [ApiService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
	title: string = "hello world";
	constructor(private apiService: ApiService){}
	ngOnInit(){
		console.log(this);
		
	}
}