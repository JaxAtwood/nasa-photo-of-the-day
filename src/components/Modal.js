import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'


const ModalModalExample = (props) => (
  <Modal trigger={<Button>Tell Me More</Button>} key={props.ida}>
    <Modal.Header>{props.title}</Modal.Header>
      <Modal.Description>
        <h2>Date: {props.date}</h2>
        <p>{props.explanation}</p>
      </Modal.Description>
  </Modal>
)

export default ModalModalExample;


