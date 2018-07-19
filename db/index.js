const faker = require('faker');

const cars = ["Chevrolet","Cadillac","Ford","Chrysler","Dodge","Jeep","Tesla","Toyota","Honda","Nissan","Audi","Mercedes Benz","BMW","Volkswagen","Porsche","Jaguar","Aston Martin","Land Rover","Bentley","Mini","Rolls Royce","Fiat","Lamborghini","Maserati","Ferrari","Bugatti","Kia","Hyandai"];
const randRange = (max, min=0) => ~~(Math.random() * (max - min + 1)) + min;

module.exports = function() {

  const merchantsCount = 100;
  const db = {};
  var bids = [];
  var bidsCursor = 0;

  const genBids = amount => [...Array(amount)].map((item, id)=> ({
    id:         ++bidsCursor,
    carTitle:   cars[randRange(cars.length)],
    amount:     faker.random.number(),
    created:    faker.date.past()
  }));

  db.merchants = [...Array(merchantsCount)].map((item, id)=> {
    const newBids = genBids(randRange(2, 10));
    bids = [...newBids];

    return {
      id: id + 1,
      firstname:  faker.name.firstName(),
      lastname:   faker.name.lastName(),
      avatarUrl:  faker.internet.avatar(),
      email:      faker.internet.email(),
      phone:      faker.phone.phoneNumber(),
      hasPremium: Math.random() >= 0.5,
      bids:       newBids
    }
  });

  db.bids = bids;

  return db;
}
