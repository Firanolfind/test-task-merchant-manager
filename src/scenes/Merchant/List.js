import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as actions from '~/redux/merchants/actions';

class MerchantList extends Component {

  componentWillMount() {
    this.props.actions.fetch();
  }

  render () {
    return (
      <Row className="merchant-list">
        <Col xs="12">
          <ReactTable
            data={this.props.items}
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
                  const { id, firstname, lastname } = data.original;
                  return <Link to={`/merchants/${id}`}>{`${firstname} ${lastname}`}</Link>
                }
              },
              {
                Header: 'Email',
                accessor: 'email'
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
        items: state.merchants
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(MerchantList);
