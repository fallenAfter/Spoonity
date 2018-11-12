import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Launches, Launch } from '../data/launches';
import { Rocket} from '../data/launches';



@Component({
  selector: 'app-root',
  templateUrl: './upcomming.component.html',
  providers: [ApiService],
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {
  title = 'Upcomming Rocket Launches';
  public launches: Launches;
  public nextLaunch: Launch;
  public countDown: Timer;
  public a: string;
  error: any;
  constructor(private apiService: ApiService){}

  async ngOnInit(){
  	this.launches = new Launches();
  	this.nextLaunch = new Launch();
  	this.nextLaunch.rocket = new Rocket();
  	await this.getNextLaunch();
  	this.getLaunches();
  	this.countDownTimer(this.nextLaunch.windowstart);
  }
  async getLaunches(){
  	this.launches = new Launches();
  	await this.apiService.getApi('https://launchlibrary.net/1.4/', 'launch/next/10/?sort=descending&limit=10').then((res) => this.launches = res).catch((err) => console.log(err));
  }
  async getNextLaunch(){
  	await this.apiService.getApi('https://launchLibrary.net/1.4/', 'launch/next/1').then((res) => this.nextLaunch = res.launches[0]).catch(function(err){
  		console.log(err);
  	});
  }

  getLaunchStatus(status: number): string{
  	switch(status){
  		case 1: return "Green";
  		case 2: return "Red";
  		case 3: return "Success";
  		case 4: return "Failed";
  	}
  }
  getCountry(countryCode){
  	switch(countryCode){
  		case "KAZ": return "Kazakstan";
  		case "USA" : return "United States";
  		case "NZL" : return "New Zeland";

  	}
  }
  async countDownTimer(targetDateTime){
  	//let time: Timer = new Timer(targetDateTime);
  	 this.countDown = new Timer(targetDateTime).getTime();
  	 console.log(this.countDown);
  	 setInterval((data => this.countDown.tick()), 1000);
  }
}

class Timer implements Time{
	public days: number;
	public hours: number;
	public minutes: number;
	public seconds: number;
	constructor(targetDateTime){
		let timer: any;
	  	let now: any = new Date();
	  	let tgtDate: any = new Date(targetDateTime);
	  	let totalSeconds = (tgtDate.getTime() - now.getTime()) /1000;
	  	this.days = Math.floor(totalSeconds/86400);
	  	this.hours = Math.floor((totalSeconds%86400)/3600);
	  	this.minutes = Math.floor(((totalSeconds%86400)%3600)/60);
	  	this.seconds = Math.floor((((totalSeconds%86400)%3600)%60));
	}

	public getTime(): Timer{
		return this;
	}

	public tick(){
		this.seconds--;
		if(this.seconds < 0){
			//tick minute
			this.minutes--;
			this.seconds = 59;
		}
		if(this.minutes < 0){
			this.hours--;
			this.minutes = 59;
		}
		if(this.hours <0){
			this.days--;
		}
	}
}

interface Time{
	days: number,
	hours: number,
	minutes: number,
	seconds: number
}





