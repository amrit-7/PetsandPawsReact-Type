import "./card.styles.css";
import { Monster } from "../../App";
type monster = {
  monster: Monster;
};
const Card = ({ monster }: monster) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set4`} alt={`cat ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
