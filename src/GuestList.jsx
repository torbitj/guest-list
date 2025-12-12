import { useGuest } from "./GuestContext";
import GuestItem from "./GuestItem";

const GuestList = () => {
  const { guests } = useGuest();
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        {guests.map((guest) => <GuestItem key={guest.id} guest={guest} />)}
      </tbody>
    </table>
  )
}

export default GuestList;