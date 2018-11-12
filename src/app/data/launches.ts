export class Launch{
	id: number;
	name: string;
	status: number;
	windowstart: string;
	windowend: string;
	location: Location;
	rocket: Rocket;
	constructor(){
	}
}
export class Launches{
	launches: Launch[];
	constructor(){
		this.launches = [];
	}
}
class Location{
	id: number;
	name: string;
	countryCode: string;
}
export class Rocket{
	id: number;
	name: string;
	configuration: string;
	familyName: string;
	agencies: Agency[];
	imageURL: string;
}
class Agency{
	id: number;
	name: string;
	countryCode: string;
	type: number;
}