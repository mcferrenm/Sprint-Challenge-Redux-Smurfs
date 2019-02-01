import React from "react";
import { Button, Jumbotron } from "reactstrap";

const Jumbo = () => {
  return (
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is a simple CRUD app using Async Redux</p>
      <hr className="my-2" />
      <p>
        It uses Redux Thunk to dispatch asyncronous AXIOS calls from actions
      </p>
      <p className="lead">
        <a href="mailto:mcferrenmax@gmai.com">
          <Button color="primary">Hire Me 🤝</Button>
        </a>
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
