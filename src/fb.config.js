const queryString = require('query-string');

  const stringifiedParams = queryString.stringify({
    client_id: 'e500c958a3c7abf72375381996359848' || process.env.FACEBOOK_APIID,
    redirect_uri: 'https://www.example.com/authenticate/facebook/',
    scope: ['email', 'user_friends'].join(','), // comma seperated string
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
  });
  
  export const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;