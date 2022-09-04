import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [singleCountry,setSingleCountry]=useState([])
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      //console.log(res.data)
      setCountries(res.data);
      setCountriesToShow(res.data);
    });
  }, []);
  
  //console.log(search)
  const findCountries = (event) => {
    setSearch(event.target.value);
    const x = countries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCountriesToShow(x);
    setShow(false);
  };
  const showDetails = (event) => {
    if (!show) {
      console.log("byefvgbhnjmk,l.;")
      const x = countries.filter((country) =>
        country.capital===event.target.id
      );
      setSingleCountry(x);
      setShow(true);
    } else {
      console.log("hello dfghjklo,ijuhvvbnjmk")
      setSingleCountry([])
      setShow(false);
    }
  };
  if (singleCountry.length === 1) {
    const country = singleCountry[0];
   
    console.log(country);
    return (
      <div className="Container country text-white">
       
        <Country
          key={country.name}
          country={country}
          show={show}
          showDetails={showDetails}
        />
      </div>
    );
  } else {
    return (
      <div className="text-white bg-grey mb-3 center">
        <div className="header center">
       
          <h5 className="center">Where in the world</h5>
        
      </div>
      <div className="searchCountry">
          <span className="big">Search Countries:</span> <input value={search} placeholder="Search a country ...." className="searchField text-whites" onChange={findCountries} /><br/><br/>
        </div>
      <div className="Container main center wid1">
        
        <Row sm={1} md={4} className="g-4 wid1 c">
        {countriesToShow.map((country) => (
          <Col key={country.name} className='wid2'>
          <Card className="text-white bg-blac mb-3 " style={{ width: "100%" } }>
            <Card.Img variant="top" src={country.flags.png} width="550" height="200" border='1px solid black'/>
            <Card.Body >
              <Card.Title className='center'>{country.name}</Card.Title>
              <Button variant="primary" id={country.capital} onClick={showDetails}>
                Show
              </Button>
            </Card.Body>
          </Card>
          </Col>
        ))}
        </Row>
      </div>
      </div>
    );
  }
};
export default App;
