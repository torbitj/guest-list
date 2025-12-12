import { useEffect } from "react";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails"
import { useGuest } from "./GuestContext";

const App = () => {
  const { setGuests, guestDetails } = useGuest();

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
      {guestDetails.name ? <GuestDetails /> : <GuestList />}
    </>
  );
}

export default App;