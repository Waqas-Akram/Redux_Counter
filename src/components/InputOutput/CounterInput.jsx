import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction, decrementAction, resetAction } from "../Action";
import { Row, Col, Container } from "react-bootstrap";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const CounterInput = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Row>
          <Col>
            <center>
              <button
                className="btn btn-info m-4  px-3"
                onClick={() => dispatch(incrementAction())}
              >
                <LibraryAddIcon />
              </button>
              <button
                className="btn btn-info m-4  px-3"
                onClick={() => dispatch(decrementAction())}
              >
                <IndeterminateCheckBoxIcon />
              </button>
              <button
                className="btn btn-info m-4  px-4."
                onClick={() => dispatch(resetAction())}
              >
                <RotateLeftIcon />
              </button>
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CounterInput;
