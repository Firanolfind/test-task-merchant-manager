import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import SubmitForm from './SubmitForm';
import * as actions from '~/redux/merchants/actions';

class Edit extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleSubmit = values => {
    this.setState({ disabled: true });
    this.props.actions.update(values);
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.actions.fetch(id);
  }

  componentWillReceiveProps(props) {
    if(props.temp.__updated) {
      props.history.push(`/merchants/${props.temp.id}`);
    }
  }

  componentWillUnmount() {
    this.props.actions.resetSingle();
  }

  render () {
    const { collection, error } = this.props;
    const id = ~~this.props.match.params.id;
    const model = collection.find(item => item.id === id);

    return (
      <Row className="merchant-edit">
        <Col>
          <h1>Edit Merchant</h1>
          { model
            ? <SubmitForm
                initialValues={model}
                errorProp={error}
                disabled={this.state.disabled}
                onSubmit={this.handleSubmit} />
            : error
              ? <Alert color="danger">
                  {error.msg ? error.msg : 'Error. Could not load data from server'}
                </Alert>
              : <h1>Loading...</h1>
          }
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => ({
    temp: state.merchants.temp,
    error: state.merchants.error,
    collection: state.merchants.collection
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Edit);
