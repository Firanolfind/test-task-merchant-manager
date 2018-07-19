import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

class Index extends Component {

  render () {
    return (
      <Row className="index">
        <Col xs="12">
          <Jumbotron>
            <h1 className="display-3">Merchant manager!</h1>
            <h4 className="display-6">Front-end Test Task</h4>
            <br/>
            <hr className="my-4" />
            <h5 className="display-6">To start</h5>
            <code>yarn</code>
            <br/>
            <code>yarn start</code>
            <hr className="my-4" />
            <h5 className="display-6">Task</h5>
            <p className="">Develop SPA which should manage merchants. A user can interact with:</p>
            <ul>
              <li>☑ list of merchants (better with pagination)</li>
              <li>☑ adding merchant (redux-form is allowed but not required)</li>
              <li>☑ merchant editing</li>
              <li>☐ merchant removing</li>
              <li>☑ sorted history of bids for each merchant</li>
            </ul>
            <p className="">Front-end part should be developed as SPA with ES6, React and Redux.
You can also use TypeScript to develop this task, but it is not required
Back-end API should be mocked.</p>
            <hr className="my-4" />
            <h5 className="display-6">Data structure example</h5>
            <br/>
            <pre>
{`Bid {
  id: string,
  carTitle: string,
  amount: number,
  created: string
}

Merchant {
  id: string,
  firstname: string,
  lastname: string,
  avatarUrl: string,
  email: string,
  phone: string,
  hasPremium: boolean,
  bids: Array<Bid>
}`}
            </pre>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Index
