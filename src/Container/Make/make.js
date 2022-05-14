import React from "react";
import "./make.css";
import { Button, Modal, Carousel } from "react-bootstrap";
import { useState } from "react";
function Draft(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">草稿</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/Draft/page3-4.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/Draft/page5-6.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/Draft/page17-18.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Object(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">物件</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/object/object1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/object/object2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/object/object4.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Img/object/object8.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Color(props) {
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
        <Button variant="outline-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Final(props) {
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
        <Button variant="outline-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Make() {
  const [modalDraftShow, setModalDraftShow] = React.useState(false);
  const [modalObjectShow, setModalObjectShow] = React.useState(false);
  const [modalColorShow, setModalColorShow] = React.useState(false);
  const [modalFinalShow, setModalFinalShow] = React.useState(false);
  return (
    <div className="makecontainer">
      <h1 className="title">Timeline</h1>
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date">21th March - 11th April, 2022</h3>
              <h1>故事發想</h1>
              <p>
                先有想故事的同學負責作故事的發想，故事初步完成之後，每位組員一起討論是否哪裡需要修改調整，以提升故事的合理性以及完整度。
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">12th April - 25th April, 2022</h3>
              <h1>線稿</h1>
              <p>
                畫線稿前小組先討論故事書每一頁的呈現方式確定劇情安排，負責同學會利用紙筆依照劇情畫出草稿。待草稿確定後將接著進行線稿精搞的動作，然後直接上傳到電腦開始上色步驟。
              </p>
              <Button variant="light" onClick={() => setModalDraftShow(true)}>
                See picture
              </Button>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">12th April - 16th May, 2022</h3>
              <h1>物件製作</h1>
              <p>
                物件跟故事書以分開獨立進行製作，各個物件在設計時會依照故事所想要呈現的樣子設定尺寸並選擇合適的材質製作，完成後再與故事書進行結合。
              </p>
              <Button variant="light" onClick={() => setModalObjectShow(true)}>
                See picture
              </Button>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">15th April - 20th May, 2022</h3>
              <h1>色彩調整</h1>
              <p>
                負責美術的同學會依照故事設定來挑選顏色以及上色，在上完底色後同學接著進行陰影以及質感的後製，營造出故事當下的氛圍。
              </p>
              <Button variant="light" onClick={() => setModalColorShow(true)}>
                See picture
              </Button>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">17th May - 30th May, 2022</h3>
              <h1>完成品</h1>
              <p>
                故事書我們以單面橫式的方式印刷，印刷裝訂完成後將設計完成的物件以及NFC感應拼裝結合到故事書中，精修調整至作品完成。
              </p>
              <Button variant="light" onClick={() => setModalFinalShow(true)}>
                See picture
              </Button>
            </div>
          </li>
        </ul>
      </div>
      <Draft show={modalDraftShow} onHide={() => setModalDraftShow(false)} />
      <Object show={modalObjectShow} onHide={() => setModalObjectShow(false)} />
      <Color show={modalColorShow} onHide={() => setModalColorShow(false)} />
      <Final show={modalFinalShow} onHide={() => setModalFinalShow(false)} />
    </div>
  );
}

export default Make;
