import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import axios from "axios";
import { BeersContext } from "../context/beers.context";
import { Link } from "react-router-dom";

const BeersPage = () => {
  const { beers } = useContext(BeersContext);
  //   const [beers, setBeers] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://ih-beers-api2.herokuapp.com/beers")
  //       .then((response) => {
  //         setBeers(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  //   console.log(beers);

  return (
    <>
      <Header />
      {/* <div> */}
      {beers.map((beer) => {
        return (
          <div>
            <img src={beer.image_url} alt={beer.name} width="30px%" />
            <Link to={`/beers/${beer._id}`}>
              <h1>{beer.name}</h1>
            </Link>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
};

export default BeersPage;
