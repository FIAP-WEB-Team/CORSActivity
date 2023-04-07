import { formatCurrency, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FlightData } from 'src/app/data/FlightData';

import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-select-price-screen',
  templateUrl: './select-price-screen.component.html',
  styleUrls: ['./select-price-screen.component.css']
})
export class SelectPriceScreenComponent {
 

  flightList:FlightData[]=[]
  SelectedFlight!:FlightData
  isSelectedDiv:boolean=false
  selectedFlightIndex:number=-1;

  selectedFlights: {[key: number]: boolean} = {}; // objeto para mapear as seleções de cada voo

  selectedDiv(i: number) {
    if (this.selectedFlightIndex == i) {
      // Se o mesmo voo for selecionado, desmarque a seleção
      this.selectedFlightIndex = -1;
     
    } else {
      // Se um novo voo for selecionado, desmarque todos os outros
      this.selectedFlightIndex = i;
      this.selectedFlights[i]=true
    
      for (let j = 0; j < this.flightList.length; j++) {
        if (j !== i) {
          this.selectedFlights[j] = false;
        }
      }
    }
  }

 constructor(private http: HttpClient, private FlightService:FlightService)
 {

  
 }
 
  
  async ngOnInit()
  {
   
    await  this.FlightService.getFlights()
     

    this.populandoListaFlight();
  }
async populandoListaFlight()
{ 
  for (let flight of this.FlightService.flights)
{
  this.flightList.push(new FlightData(
    flight.flightNumber,
    flight.departure,
    flight.arrival,
    flight.price,
    formatDate(flight.departureDate,'dd/MM/yyyy HH:mm:ss', 'en-US'),
    formatDate(flight.arrivalDate,'dd/MM/yyyy HH:mm:ss', 'en-US'),
    
  ));
  console.log(flight)
}
}





}
