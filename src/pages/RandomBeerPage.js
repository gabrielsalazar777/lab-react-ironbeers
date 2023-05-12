import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log("RUNNING", response.data.name);
        setRandomBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <img src={randomBeer.image_url} alt={randomBeer.name} width="50px" />
      <h1>{randomBeer.name}</h1>
      <h3>{randomBeer.tagline}</h3>
      <h3>
        <b>{randomBeer.first_brewed}</b>
      </h3>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;
