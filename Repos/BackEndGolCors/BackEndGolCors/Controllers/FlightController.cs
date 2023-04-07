using BackEndGolCors.Data;
using BackEndGolCors.Service;

using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Cors;

namespace BackEndGolCors.Controllers
{
    [ApiController]
    [Route("/")]
    [EnableCors (origins: "http://localhost:4300", headers:"*",methods:"*")]
    public class FlightController:ControllerBase
    {

        private readonly FlightService DbFlightService;

        public FlightController(FlightService db)
        {
            this.DbFlightService = db;
        }

        [HttpGet("GetFlights")]
        public async Task<List<FlightsData>> GetFlights() 
        {
            return await DbFlightService.GetFlightsAsync();
        }
    }
}
