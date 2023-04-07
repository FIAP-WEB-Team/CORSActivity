using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Routing.Constraints;

namespace BackEndGolCors.Data
{
    [FirestoreData]
    public class FlightsData
    {
        [FirestoreProperty]
        public int FlightNumber { get; set; }
        [FirestoreProperty]
        public string Departure { get; set; } = string.Empty;
        [FirestoreProperty]
        public string Arrival { get; set; } = string.Empty;
        [FirestoreProperty]
        public double Price { get; set; }
        [FirestoreProperty]
        public DateTime DepartureDate { get; set; } = DateTime.Now;
        [FirestoreProperty]
        public DateTime ArrivalDate { get; set; } = DateTime.Now;
    }
}
