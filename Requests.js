import axios from 'axios';
import base64 from 'react-native-base64';
import querystring from 'querystring';

const BASE_URL = 'https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/';

const getAccessToken = async () => {
  const TOKEN_URL = 'https://apigw.nubentos.com:443/token';
  const CONSUMER_KEY = 'BJhZCZgK8LqOhgfeaMgIIo1Xo_ca';
  const CONSUMER_SECRET = 'fSB4hwSc2gzAkKLmo4ZHlJXYfsca';

  return await axios({
    method: 'POST',
    url: TOKEN_URL,
    data: querystring.stringify({
      grant_type: 'client_credentials'
    }),
    headers: {
      Authorization: 'Basic ' + base64.encode(`${CONSUMER_KEY}:${CONSUMER_SECRET}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};

export const statistics = async () => {
  const credentials = await getAccessToken();

  const cases = await axios({
    method: 'GET',
    url: `${BASE_URL}cases`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      'Accept': 'application/json'
    }
  });

  const suspectedCases = await axios({
    method: 'GET',
    url: `${BASE_URL}cases/suspected`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      'Accept': 'application/json'
    }
  });

  const confirmedCases = await axios({
    method: 'GET',
    url: `${BASE_URL}cases/confirmed`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      'Accept': 'application/json'
    }
  });

  const deaths = await axios({
    method: 'GET',
    url: `${BASE_URL}deaths`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      'Accept': 'application/json'
    }
  });

  const recovereds = await axios({
    method: 'GET',
    url: `${BASE_URL}recovered`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      'Accept': 'application/json'
    }
  });

  return {
    cases: cases.data[0].cases,
    suspectedCases: suspectedCases.data[0].data,
    confirmedCases: confirmedCases.data[0].data,
    deaths: deaths.data[0].data,
    recovereds: recovereds.data[0].data
  }

}


