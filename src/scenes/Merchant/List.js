import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as actions from '~/redux/merchants/actions';

const merchants = [
    {
      "id": 0,
      "firstname": "Alanna",
      "lastname": "Paucek",
      "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/shvelo96/128.jpg",
      "email": "Mona_Bayer55@yahoo.com",
      "hasPremium": false,
      "bids": []
    },
    {
      "id": 1,
      "firstname": "Alexandrine",
      "lastname": "Harber",
      "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/dnezkumar/128.jpg",
      "email": "Helga59@yahoo.com",
      "hasPremium": false,
      "bids": []
    },
    {
      "id": 2,
      "firstname": "Kenton",
      "lastname": "Botsford",
      "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/lhausermann/128.jpg",
      "email": "Yasmeen83@yahoo.com",
      "hasPremium": true,
      "bids": []
    },
    {
      "id": 3,
      "firstname": "Leora",
      "lastname": "Kuphal",
      "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg",
      "email": "Davin_Christiansen58@gmail.com",
      "hasPremium": true,
      "bids": []
    },
    {
      "id": 4,
      "firstname": "Rashad",
      "lastname": "Brown",
      "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/kaysix_dizzy/128.jpg",
      "email": "Arnoldo_Shields@hotmail.com",
      "hasPremium": true,
      "bids": []
    }
  ];


class MerchantList extends Component {
  render () {
    return (
      <Row className="merchant-list">
        <Col xs="12">
          <ReactTable
            data={merchants}
            Header={false}
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
