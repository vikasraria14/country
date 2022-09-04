import "./App.css";
import Weather from "./Weather";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const Country = ({ country,show,showDetails }) => {
  return (
    <div className="Container bg-grey text-white">
        
        <div className="add-margin">       
            <Button variant="primary" onClick={showDetails}>Back </Button>
        </div>
        <Row  sm={1} md={2} className="g-4">
        <Col className=" add-padding wid">
          <Card style={{ width: "100%", height:"20rem" }} className="bg-grey text-white">
            <Card.Img className="center" src={country.flags.png} />
          </Card>
        </Col>
        <Col className="wid">
          <Card
            style={{ width: "100%", height: "20rem" }}
            className="bg-grey text-white"
          >
            <Card.Text></Card.Text>
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <p>Capital : {country.capital}</p>
              <p>Area : {country.area}</p>
              <p>Population : {country.population}</p>
              <h4>Languages : </h4>
              {country.languages.map((lang) => (
                <p>{lang.name}</p>
              ))}
              <Weather country={country}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Country;
