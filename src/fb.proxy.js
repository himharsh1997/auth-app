import axios from 'axios';

export async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    url: 'https://graph.facebook.com/v4.0/oauth/access_token',
    method: 'get',
    params: {
      client_id: '235821818120555',
      client_secret: 'c38ca5f94036f3a4ea6c73fbd1cb2ba6',
      redirect_uri: 'https://auth-app-test-01.herokuapp.com/',
      code,
    },
  });
  console.log(data);
  return data.access_token;
};