import { useState, createContext, useContext } from "react";

const GuestContext = createContext();

export const GuestProvider = ({children}) => {
  const [guests, setGuests] = useState([]);
  const [guestDetails, setGuestDetails] = useState({})

  const selectGuest = (guest) => {
    setGuestDetails(guest)
    console.log(guest)
  };

  const unSelectGuest = () => setGuestDetails({});

  const value = {
    guests,
    guestDetails,
    setGuests,
    setGuestDetails,
    selectGuest,
    unSelectGuest
  }

  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
}

export const useGuest = () => {
  const context = useContext(GuestContext);
  if (!context) {
    throw new Error("Must have access to GuestProvider");
  }
  return context;
}