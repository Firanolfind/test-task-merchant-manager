import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Container, Button, ButtonGroup,
  Alert, NavLink, ListGroup, ListGroupItem, Modal, ModalHeader, ModalFooter
} from 'reactstrap';
import Moment from 'moment';
import * as actions from '~/redux/merchants/actions';

const Content = props => (
  <Row>
    <Col xs="3">
      <img width="100%" src={props.model.avatarUrl} alt="Avatar" />
    </Col>
    <Col xs="9">
      { props.error && <Alert color="danger">
        {props.error.msg ? props.error.msg : 'Error. Could not load data from server'}
      </Alert> }
      <h1>{props.model.firstname}{' '}{props.model.lastname}</h1>
      <Row>
        <Col lg="10" sm="9">
          <p className="lead">{props.model.hasPremium ? '👑 Premium' : 'Regular'}</p>
          <p>{props.model.email}</p>
          <p>{props.model.phone}</p>
        </Col>
        <Col lg="2" sm="3">
          <p>
            <RRNavLink to={`/merchants/${props.model.id}/edit`}>
              <Button size="lg" color="primary">
                {'Edit'}
              </Button>
            </RRNavLink>
          </p>
          <p>
            <Button outline size="sm" onClick={props.handleDelete}>
              {'Delete'}
            </Button>
          </p>
        </Col>
      </Row>
      <h5 className="display-6">Bids</h5>
      <ListGroup>
        {props.model.bids
          .sort((a, b) => Moment(a.created) < Moment(b.created))
          .map(item => (
            <ListGroupItem key={item.id}>
              <Row>
                <Col lg="3" xs="4">
                  {item.carTitle}{' '}
                </Col>
                <Col lg="7" xs="4">
                  {item.amount}{'€'}
                </Col>
                <Col lg="2" xs="4">
                  {Moment(item.created).fromNow()}
                </Col>
              </Row>
            </ListGroupItem>
          ))
        }
      </ListGroup>
      <br/>
      <hr className="my-4" />
    </Col>
  </Row>
);

class MerchantSingle extends Component {

  constructor() {
    super();
    this.state = {
      deleteModal: false
    };
  }

  cancelDelete = () => {
    this.setState({
      deleteModal: false
    });
  }

  confirmDelete = () => {
    this.setState({
      deleteModal: true
    });
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.actions.fetch(id);
  }

  render () {
    const { collection, error } = this.props;
    const id = ~~this.props.match.params.id;
    const model = collection.find(item => item.id === id);

    return (
      <div className="merchant-single">
        { model
          ? <Content model={model} error={error} handleDelete={this.confirmDelete} />
          : error
            ? <Alert color="danger">
                {error.msg ? error.msg : 'Error. Could not load data from server'}
              </Alert>
            : <h1>Loading...</h1>
        }
        <Modal isOpen={this.state.deleteModal} toggle={this.cancelDelete} className={this.props.className}>
          <ModalHeader toggle={this.cancelDelete}>Are you sure you want to delete merchant?</ModalHeader>
          <ModalFooter>
            <Button color="error" onClick={this.props.actions.remove}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.cancelDelete}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
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
