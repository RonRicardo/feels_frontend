import React from 'react';
import { Panel } from 'react-bootstrap'

const FeelsCard = (props) => {
  console.log(props.feel.id)
  return (
    <div>
      <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">{props.feel.created_at.slice(0, 10)}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <p>Emotion: {props.feel.emotion}</p>
        <p>Thought: {props.feel.thought}</p>
        <p>Support: {props.feel.support}</p>
        <p>Against: {props.feel.against}</p>
        <p>Alternate thought: {props.feel.alternate_thought}</p>
        <p>Alternate emotion: {props.feel.alternate_emotion}</p>
      </Panel.Body>
    </Panel>
  </div>
  )
}

export default FeelsCard;
