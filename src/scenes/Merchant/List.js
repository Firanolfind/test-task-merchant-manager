import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as actions from '~/redux/merchants/actions';

class MerchantList extends Component {

  componentWillMount() {
    this.props.actions.fetchAll();
  }

  render () {
    return (
      <Row className="merchant-list">
        <Col xs="12">
          <ReactTable
            data={this.props.collection}
            columns={[
              {
                Header: '',
                accessor: 'avatarUrl',
                Cell: row => <img src={row.value} width="40" height="40" />
              },
              {
                Header: 'Merchant',
                id: 'id',
                Cell: data => {
                  const { id, firstname, lastname, busy } = data.original;
                  const title = `${firstname || ''} ${lastname || ''}`;
                  return busy
                    ? title
                    : <Link to={`/merchants/${id}`}>{title}</Link>
                }
              },
              {
                Header: 'Email',
                accessor: 'email'
              },
              {
                Header: 'Phone Number',
                accessor: 'phone'
              },
              {
                Header: 'Premium',
                id: 'hasPremium',
                accessor: d => d.hasPremium ? '✓' : ''
              }
            ]}
            className="-striped -highlight"
          />
        </Col>
      </Row>
    );
  }
}

export default connect(
  state => ({
    collection: state.merchants.collection
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(MerchantList);
