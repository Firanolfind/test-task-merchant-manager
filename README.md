# Front-end Test Task

## To start

`yarn`

`yarn start`

Up mock rest api server
`yarn run rest`

## Task

Develop SPA which should manage merchants. A user can interact with:
 - [x] list of merchants (better with pagination)
 - [x] adding merchant (redux-form is allowed but not required)
 - [x] merchant editing
 - [x] merchant removing
 - [x] sorted history of bids for each merchant

Front-end part should be developed as SPA with ES6, React and Redux.
You can also use TypeScript to develop this task, but it is not required
Back-end API should be mocked.

## Data structure example
Bid {
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
}

## Seed link
https://github.com/auto1-oss
