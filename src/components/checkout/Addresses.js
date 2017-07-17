import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Panel,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

const Addresses = () => (
  <Panel header={<h3> Billing Address </h3>}>
    <form>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              First Name
            </ControlLabel>
            <FormControl type="text" placeholder="John"/>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Middle Name / Initials
            </ControlLabel>
            <FormControl type="text" placeholder="A."/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Last Name
            </ControlLabel>
            <FormControl type="text" placeholder="Doe"/>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Email Address
        </ControlLabel>
        <FormControl type="email" placeholder="you@world.com"/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Address
        </ControlLabel>
        <FormControl type="text" placeholder="123 Sesame Street"/>
      </FormGroup>

      <FormGroup>
        <FormControl type="text" placeholder="Building A"/>
      </FormGroup>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Zip
            </ControlLabel>
            <FormControl type="text" placeholder="00000"/>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              City
            </ControlLabel>
            <FormControl type="text" placeholder="NYC"/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Country
            </ControlLabel>
            <FormControl.Static type="text">United States</FormControl.Static>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              State / Province
            </ControlLabel>
            <FormControl type="text" placeholder="Delaware"/>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Telephone (to receive updates on your order)
        </ControlLabel>
        <FormControl type="tel" placeholder="123456789"/>
      </FormGroup>
    </form>
  </Panel>
);

const ConnectedAddresses = connect()(Addresses)

export default ConnectedAddresses
