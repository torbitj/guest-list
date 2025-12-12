import { useEffect } from "react";

const App = () => {
  

  useEffect(() => {
    const getGuests = async () => {
      const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-FTB-CT-WEB-PT/guests";
      const response = await fetch(API);
      const dataAccess = await response.json();
      const retrievedGuests = dataAccess.data
      console.log(retrievedGuests);
    }
    getGuests()
  }, [])
  
  return <></>;
}

export default App;