import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export interface ClubCardProps {
  imgSource: string;
  title: string;
  text: string;
  cardWidth?: number;
}

export const ClubCard: FunctionComponent<ClubCardProps> = ({
  imgSource,
  title,
  text,
  cardWidth,
}) => (
  <Card style={{ width: `${!cardWidth ? 18 : cardWidth} rem` }}>
    <Card.Img variant="top" src={imgSource} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="success">Go to Club ➡</Button>
    </Card.Body>
  </Card>
);
