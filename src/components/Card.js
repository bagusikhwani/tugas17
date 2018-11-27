import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './card.css';

const Example = (props) => {
  return (
    <div>
      <Card className="mb-3">
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <CardText>
              <p className="fontSantren clearfix">by Santren Koding<span>Kuota Terbatas</span></p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
