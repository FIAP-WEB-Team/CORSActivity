using BackEndGolCors.Data;
using Google.Cloud.Firestore;

namespace BackEndGolCors.Service
{
    public class FlightService
    {
        FirestoreDb database;

        public FlightService()
        {
            OpenFirebaseConnection();
        }

        public void OpenFirebaseConnection()
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", "golapi-5c457-firebase-adminsdk-bxmj0-85a6c35b95.Json");
            string projectID = "golapi-5c457";
            database = FirestoreDb.Create(projectID);
        }
        public async Task<List<FlightsData>> GetFlightsAsync() 
        {
            List<FlightsData> voos = new List<FlightsData>();

            CollectionReference VoosCollection = database.Collection("GolData").Document("Data").Collection("Flights");
            QuerySnapshot VoosQuery = await VoosCollection.GetSnapshotAsync();
            foreach (DocumentSnapshot VooDoc in VoosQuery)
            {
                voos.Add(VooDoc.ConvertTo<FlightsData>());
            }

            return voos;

        }
    }
}
