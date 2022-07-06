import React from "react";
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div className="bg-dark mx-2 " style={{height:"100vh"}} >
      <h1 className="bg-dark text-center text-light px-4 my-1 mx-2">Add</h1>
      <div className="container text-light ">
        <form>
          <div className="form-group row ">
            <label for="date" className="col-sm-2 col-form-label">
              Date
            </label>
            <div className="col-sm-10">
              <input type="date" className="form-control text-center" id="date" placeholder={Date()} />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputs" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="inputs"
                placeholder="age"
              />
            </div>
          </div>
        </form>
<div className="d-flex w-100 justify-content-end mt-3">

        <Button variant="success" className="w-25">Update</Button>
</div>

      </div>
    </div>
  );
};

export default About;
