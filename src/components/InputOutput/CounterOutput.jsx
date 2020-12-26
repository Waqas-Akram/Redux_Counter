import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";

const CounterOutput = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Jumbotron className="py-5 my-4 bg-info">
              <h1 className="display-4 text-center text-light">
                Redux Counter
              </h1>
            </Jumbotron>
            <Jumbotron className="py-2 my-3 bg-info">
              <h1 className="display-4 text-center text-light">{counter}</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CounterOutput;
