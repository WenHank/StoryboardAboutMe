import React from "react";
import { Card, Button } from "react-bootstrap";
import "./about.css";
function about() {
  return (
    <div className="aboutcontainer">
      <div className="sgroup">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>Wen</Card.Title>
            <Card.Text>Job</Card.Text>
            <Card.Text>Skill</Card.Text>
            <Card.Text>Contact</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>貝貝</Card.Title>
            <Card.Text>Job</Card.Text>
            <Card.Text>Skill</Card.Text>
            <Card.Text>Contact</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>任力加</Card.Title>
            <Card.Text>Job</Card.Text>
            <Card.Text>Skill</Card.Text>
            <Card.Text>Contact</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="sgroup">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>涂紜瑄</Card.Title>
            <Card.Text>Job</Card.Text>
            <Card.Text>Skill</Card.Text>
            <Card.Text>Contact</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>蒲芳榆</Card.Title>
            <Card.Text>Job</Card.Text>
            <Card.Text>Skill</Card.Text>
            <Card.Text>Contact</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>吳冠緯</Card.Title>
            <Card.Text>Job</Card.Text>
            <Card.Text>Skill</Card.Text>
            <Card.Text>Contact</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default about;
