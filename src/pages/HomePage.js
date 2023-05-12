import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <img src="./beers.png" alt="beers"></img>
        <br />
        <Link to={"/beers"}>All Beers</Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
          officia mollitia praesentium expedita iste illo commodi culpa a
          debitis voluptas!
        </p>
      </div>
      <div>
        <img src="./random-beer.png" alt="random-beer"></img>
        <br />
        <Link to={"/random-beer"}>Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          dignissimos magni veritatis, repellendus reprehenderit placeat quia
          est sint. Sint, similique.
        </p>
      </div>
      <div>
        <img src="./new-beer.png" alt="new-beer"></img>
        <br />
        <Link to={"/new-beer"}>New Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          perspiciatis fugit fugiat accusamus eaque voluptatem velit labore
          consequatur, minima iste.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
