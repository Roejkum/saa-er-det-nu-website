const axios = require('axios');
require('dotenv').config();

exports.handler = function signUp(event, context, callback) {
    const mcPassword = process.env.API_KEY;
    if (!mcPassword) {
        console.error('No MailChimp API Key include in environment variables');
        process.exit(1);
      }

    const mcUsername = 'anystring';

    axios({
        method: 'get',
        url: 'https://us18.api.mailchimp.com/3.0/lists/6aa8a91bc2/members?count=1',
        auth: {
            username: mcUsername,
            password: mcPassword
        }
      })
      .then(response =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ msg: response.data.total_items }),
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
  