import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import { fetchData } from "./utils/fetchData.utils";
export type Monster = {
  name: string;
  email: string;
  id: number;
};

function App() {
  const [monsters, setmonsters] = useState<Monster[]>([]);
  const [searchField, setsearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((reponse) => reponse.json())
    //   .then((data) => setmonsters(data));
    const getData = async () => {
      const users = await fetchData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setmonsters(users);
    };
    getData();
  }, [monsters, searchField]);

  useEffect(() => {
    const filteredData = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredData);
  }, [monsters, searchField]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchedMonsters = event.target.value.toLowerCase();
    setsearchField(searchedMonsters);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Pets and Paws </h1>
      <SearchBox
        placeholder="Search monsters"
        className="monster-search"
        onChangeHandler={onChangeHandler}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
