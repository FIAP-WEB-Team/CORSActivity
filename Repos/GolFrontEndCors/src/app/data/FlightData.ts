export class FlightData {
    flightNumber: number;
    departure: string;
    arrival: string;
    price: number;
    departureDate: string;
    arrivalDate: string;
    
    

    constructor(flightNumber:number,  departure: string,arrival:string, price: number, departureDate: string,
        arrivalDate:string, ) {
        this.flightNumber = flightNumber
        this.departure = departure
        this.arrival = arrival
        this.price = price
        this.departureDate = departureDate
        this.arrivalDate = arrivalDate
        
       
       
       
    }
}
