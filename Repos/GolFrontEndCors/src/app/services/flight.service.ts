import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { FlightData } from '../data/FlightData';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FlightService {

    private apiUrl = BASE_URL + 'getflights';
    flights!: any

    constructor(private http: HttpClient) { }

    async getFlights() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const r = (await firstValueFrom<[FlightData]>( this.http.get<[FlightData]>(this.apiUrl, { headers })))
        this.flights=r
        
    
      

   
        
    }
}
