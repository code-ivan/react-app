import fetch from 'isomorphic-fetch'
import CryptoJS from 'crypto-js'

const CONFIG = require('../../config.json')[process.env.NODE_ENV || 'development'];

var baseApiUrl = CONFIG.baseApiUrl


export const fetchAction = (url, types, ownApi = true) => dispatch => {
    const [REQUEST, SUCCESS, FAILURE] = types
    var opt = {};
    if (ownApi) {
      url = `${baseApiUrl}${ url }`;

      var ciphertext = CryptoJS.AES.encrypt( CONFIG.apiToken, CONFIG.apiSecretToken);
      opt = {
          headers: {
              'x-access-token': ciphertext.toString()
          }
      }
    }

    dispatch({
      type: REQUEST
    })

    

    return fetch(url, opt)
      .then(function(response){
        if(response.headers.get("x-wp-totalpages")){
            dispatch({
                type: 'WP_TOTALPAGES',
                payload: response.headers.get("x-wp-totalpages")
            })
        }
        return response.json();
      })
      .then(
        response => dispatch({
          type: SUCCESS,
          payload: response
        }),
        error => dispatch({
          type: FAILURE,
          payload: error
        })
      )
}
  

