import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Launches } from '../data/launches';
import { Observable } from 'rxjs';
@Injectable()
export class ApiService{
	apiUrl: string;
	constructor(private http: HttpClient){}

	async getApi(apiUrl, endpoint): Promise<Launches>{
		const response = await this.http.get<Launches>(apiUrl+endpoint).toPromise();
		return response;
	}
}



