import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button, Alert } from 'reactstrap';
import * as actions from '~/redux/merchants/actions';

const Content = props => (
  <Row className="merchant-single">
    <Col xs="3">
      <img width="100%" src={props.model.avatarUrl} alt="Avatar" />
    </Col>
    <Col xs="9">
      <h1>{props.model.firstname}{' '}{props.model.lastname}</h1>
      <h5>{props.model.hasPremium ? 'Premium' : ''}</h5>
      <p><strong>email</strong>{' '}{props.model.email}</p>
      <p><strong>phone</strong>{' '}{props.model.phone}</p>
    </Col>
</Row>
);

class MerchantSingle extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.actions.fetch(id);
  }

  render () {
    const { collection, error } = this.props;
    const id = ~~this.props.match.params.id;
    const model = collection.find(item => item.id === id);

    return (
      <Container>
        { model
            ? <Content model={model} />
            : error
              ? <Alert color="danger">
                  {error.msg ? error.msg : 'Error. Could not load data from server'}
                </Alert>
              : <h1>Loading...</h1>
        }
      </Container>
    );
  }
}

export default connect(
  state => ({
    collection: state.merchants.collection,
    error: state.merchants.error
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(MerchantSingle);
