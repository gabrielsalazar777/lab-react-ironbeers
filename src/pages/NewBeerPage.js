import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const NewBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setBrewed] = useState("");
  const [brewers_tips, setTips] = useState("");
  const [attenuation_level, setAttenuation] = useState(0);
  const [contributed_by, setContributed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setBrewed("");
        setTips("");
        setAttenuation(0);
        setContributed("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setBrewed(e.target.value)}
          value={first_brewed}
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setTips(e.target.value)}
          value={brewers_tips}
        />
        <label>Attenuation Level</label>
        <input
          type="text"
          name="attenutation_level"
          onChange={(e) => setAttenuation(e.target.value)}
          value={attenuation_level}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed(e.target.value)}
          value={contributed_by}
        />
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};

export default NewBeerPage;
