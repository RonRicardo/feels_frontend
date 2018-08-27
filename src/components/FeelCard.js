import React from 'react';
import { Card } from 'semantic-ui-react';

const FeelsCard = (props) => {
  console.log(props.feel.id)
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.feel.created_at.slice(0, 10)}</Card.Header>
        <Card.Description>
          <p>Emotion: {props.feel.emotion}</p>
          <p>Thought: {props.feel.thought}</p>
          <p>Support: {props.feel.support}</p>
          <p>Against: {props.feel.against}</p>
          <p>Alternate thought: {props.feel.alternate_thought}</p>
          <p>Alternate emotion: {props.feel.alternate_emotion}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default FeelsCard;
