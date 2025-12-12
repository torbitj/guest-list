import { useGuest } from "./GuestContext";

const GuestItem = ({guest}) => {
  const { selectGuest } = useGuest();
  return (
    <tr onClick={() => selectGuest(guest)}>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}

export default GuestItem;