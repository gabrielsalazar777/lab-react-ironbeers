import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BeersContext = createContext();

const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BeersContext.Provider value={{ beers }}>{children}</BeersContext.Provider>
  );
};

export { BeersContext, BeersProvider };
