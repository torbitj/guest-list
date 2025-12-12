import { useEffect } from "react";
import GuestList from "./GuestList";
import { useGuest } from "./GuestContext";

const App = () => {
  const { setGuests } = useGuest();

  useEffect(() => {
    const getGuests = async () => {
      const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-FTB-CT-WEB-PT/guests";
      const response = await fetch(API);
      const dataAccess = await response.json();
      const retrievedGuests = dataAccess.data
      console.log(retrievedGuests);
      setGuests(retrievedGuests);
    }
    getGuests()
  }, [])
  
  return (
    <>
      <h1>Guests for the Party</h1>
      <GuestList />
    </>
  );
}

export default App;