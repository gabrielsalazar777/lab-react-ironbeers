import { useContext } from "react";
import { BeersContext } from "../context/beers.context";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const BeerDetail = () => {
  const { beers } = useContext(BeersContext);
  const { beerId } = useParams();
  const beer = beers.find((b) => {
    return b._id === beerId;
  });

  return (
    <div>
      <Header />
      <img src={beer.image_url} alt={beer.name} width="50px" />
      <h1>{beer.name}</h1>
      <h3>{beer.tagline}</h3>
      <h3>
        <b>{beer.first_brewed}</b>
      </h3>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetail;
