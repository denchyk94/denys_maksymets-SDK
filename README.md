# denys_maksymets-SDK

1) SDK is published to npm. It`s name is the-lord-of-the-rings-api.
To install it run a command 'npm install the-lord-of-the-rings-api'.

2) Api token should be specified in index.ts file -> ACCESS_TOKEN constant.
To get a token create an account in https://the-one-api.dev/sign-up.

3) Example of usage SDK code in your applciation:
const lordOfKingApi = require('the-lord-of-the-rings-api');

lordOfKingApi.getBooks().then((books) => {
  // TODO
});
