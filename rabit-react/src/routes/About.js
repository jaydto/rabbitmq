import React,{useState} from "react";
import Button from "react-bootstrap/Button";

const About = () => {
  const [data,setData]=useState(
    {
      date:"",
      age:"",
      distance:"",
      latitude:"",
      longitude:"",
      price:"",
      stores:""  
    }
    )
    const handleData=(e)=>{
      e.preventDefault()
      const newData={...data}
      newData[e.target.id]=e.target.value
      console.log(newData)
      setData(newData)
    }
  return (
    <div className="bg-dark mx-2 " style={{ height: "100vh" }}>
      <h1 className="bg-dark text-center text-light px-4 my-1 mx-2">Add</h1>
      <div className="container text-light ">
        <form>
          <div className="form-group row ">
            <label for="date" className="col-sm-2 col-form-label">
              Date
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control text-center"
                id="date"
                onChange={handleData}
                value={data.date}
                placeholder={Date()}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="age" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="age"

                
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="distance" className="col-sm-2 col-form-label">
              distance
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="distance"
                
                placeholder="distance"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="latitude" className="col-sm-2 col-form-label">
              latitude
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="latitude"
                
                placeholder="latitude"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="longitude" className="col-sm-2 col-form-label">
              Longitude
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="longitude"
                
                placeholder="Longitude"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="price" className="col-sm-2 col-form-label">
              price
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="price"
                
                placeholder="price"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="stores" className="col-sm-2 col-form-label">
              stores
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="stores"
                
                placeholder="stores"
              />
            </div>
          </div>
        </form>
        <div className="d-flex w-100 justify-content-end mt-3">
          <Button variant="success" className="w-25">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
