import React,{useState,useEffect} from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    gettingData();
  }, []);
  const gettingData = async () => {
    const res = await fetch("http://localhost:5000/");
    if (res.ok) {
      let resp = await res.json();
      console.log(resp);

      setData(resp);
      console.log(resp);
    }
  }
  return (
    <div className="container pt-2">
      <h1 className="bg-dark text-light text-center">Table data</h1>
     

      <InputGroup>
        <Form.Control
          placeholder="item to manipulate"
          aria-label="change buttons"
        />
        <Button variant="outline-secondary"   className="btn btn-success w-25 text-light">search</Button>
        <Button variant="outline-secondary"   className="btn btn-warning w-25 text-default">update</Button>
      </InputGroup>
      <Table striped bordered hover size="sm" variant="dark"> 
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Age</th>
            <th>distance</th>
            <th>latitude</th>
            <th>Longitude</th>
            <th>price</th>
            <th>stores</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,i) => (
            <tr key={i} >
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.age}</td>
              <td>{item.distance}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.price}</td>
              <td>{item.stores}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
