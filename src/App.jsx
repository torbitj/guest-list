import { useEffect, useState } from "react";
import GuestItem from "./GuestItem";

const App = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const getGuests = async () => {
      const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-FTB-CT-WEB-PT/guests";
      const response = await fetch(API);
      const dataAccess = await response.json();
      const retrievedGuests = dataAccess.data
      setGuests(retrievedGuests);
    }
    getGuests()
  }, [])
  
  return (
    <>
      <h1>Guests for the Party</h1>
      <ul>
        {guests.map((guest) => <GuestItem key={guest.id} guest={guest} />)}
      </ul>
    </>
  );
}

export default App;