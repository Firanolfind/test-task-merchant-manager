const faker = require('faker');

module.exports = function() {

  const db = {};

  db.merchants = [...Array(100)].map((item, id)=> ({
    id: id + 1,
    firstname:  faker.name.firstName(),
    lastname:   faker.name.lastName(),
    avatarUrl:  faker.internet.avatar(),
    email:      faker.internet.email(),
    phone:      faker.phone.phoneNumber,
    hasPremium: Math.random() >= 0.5,
    bids:       []
  }));

  return db;
}
