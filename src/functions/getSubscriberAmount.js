const axios = require('axios');
require('dotenv').config();

exports.handler = function signUp(event, context, callback) {
    const apiKey = process.env.API_KEY_AN;
    if (!apiKey) {
        console.error('No API Key include in environment variables');
        process.exit(1);
      }

    axios({
        method: 'get',
        url: 'https://actionnetwork.org/api/v2/forms/3d9ab0e5-1530-48fb-a300-b2f3eeee9694',
        headers: {
          'Content-Type': 'application/json',
          'OSDI-API-Token': apiKey
        }
      })
      .then(response =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ msg: response.data }),
        }),
      )
      .catch(() => {
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            msg: 'Kunne ikke hente data.',
          }),
        });
    });   
  }
  