import { useGuest } from "./GuestContext";

const GuestDetails = () => {
  const { guestDetails, unSelectGuest } = useGuest();
  console.log(guestDetails);
  return (
    <section>
      <h2>{guestDetails.name}</h2>
      <p>Email: {guestDetails.email}</p>
      <p>Phone: {guestDetails.phone}</p>
      <p>Bio: {guestDetails.bio}</p>
      <p>Job Title: {guestDetails.job}</p>
      <button onClick={unSelectGuest}>Back</button>
    </section>
  )
}

export default GuestDetails;