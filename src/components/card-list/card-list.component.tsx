import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";
type monster = {
  monsters: Monster[];
};
export const CardList = ({ monsters }: monster) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};
