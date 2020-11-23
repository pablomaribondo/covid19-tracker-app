import axios from "axios";
import base64 from "react-native-base64";
import querystring from "querystring";

const getAccessToken = async () => {
  return await axios({
    method: "POST",
    url: process.env.TOKEN_URL,
    data: querystring.stringify({
      grant_type: "client_credentials",
    }),
    headers: {
      Authorization:
        "Basic " +
        base64.encode(
          `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const formatNumber = value =>
  value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

export const statistics = async () => {
  const credentials = await getAccessToken();

  const activeCases = await axios({
    method: "GET",
    url: `${process.env.BASE_URL}/active`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      Accept: "application/json",
    },
  });

  const deaths = await axios({
    method: "GET",
    url: `${process.env.BASE_URL}/deaths`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      Accept: "application/json",
    },
  });

  const recovereds = await axios({
    method: "GET",
    url: `${process.env.BASE_URL}/recovered`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      Accept: "application/json",
    },
  });

  const totalCases = await axios({
    method: "GET",
    url: `${process.env.BASE_URL}/cases`,
    headers: {
      Authorization: `${credentials.data.token_type} ${credentials.data.access_token}`,
      Accept: "application/json",
    },
  });

  return {
    activeCases: formatNumber(activeCases.data[0].data),
    deaths: formatNumber(deaths.data[0].data),
    recovereds: formatNumber(recovereds.data[0].data),
    totalCases: formatNumber(totalCases.data[0].data),
  };
};
