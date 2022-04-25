import React from "react";
import "./make.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Make() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="makecontainer">
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
              <Button variant="light" onClick={() => setModalShow(true)}>
                See picture
              </Button>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 4</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 5</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Make;
