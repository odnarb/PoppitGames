import { HOSTNAME, POPPIT_KEYCHAIN } from '../components/globalconstants';

import SInfo from 'react-native-sensitive-info';

const CookieManager = require("react-native-cookies")

let _checkCookie = async (opts) => {
    console.log("---------------------_checkCookie()------------------------------");

    console.log("POPPITGAMES :: _checkCookie() :: START :")

    let url = `${HOSTNAME}/appuser/checkcookie`;

    console.log("POPPITGAMES :: _checkCookie() :: Cookie content: ", opts.cookie)

    let loginReqOpts = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': opts.cookie
        }
    };

    console.log("POPPITGAMES :: _checkCookie() :: BEFORE _sendRequest()")

    let res = await _sendRequest(url, loginReqOpts);

    console.log("POPPITGAMES :: _checkCookie() :: ATER _sendRequest() :: res:", res)

    console.log("---------------------_checkCookie() DONE------------------------------");
    return res;
}

let _sendLoginReq = async (opts) => {
    console.log("---------------------_sendLoginReq()------------------------------");

    console.log("POPPITGAMES :: _sendLoginReq() :: START :")

    //clear cookies first
    await CookieManager.clearAll();

    // prep the login request options
    let url = `${HOSTNAME}/appuser/login`;
    let loginReqOpts = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: opts.email,
            password: opts.password,
            remember: opts.remember
        })
    };

    console.log(`POPPITGAMES :: _sendLoginReq() :: BEFORE _sendRequest() :: url: ${url}`, opts)

    let res = await _sendRequest(url, loginReqOpts);

    console.log("POPPITGAMES :: _sendLoginReq() :: ATER _sendRequest() :: res:", res)

    console.log("---------------------_sendLoginReq() DONE------------------------------");

    return res;
};

let _sendLogoutReq = async () => {
    console.log("---------------------_sendLogoutReq()------------------------------");

    try {
        //if secure storage has a cookie, attempt a login
        let poppitCookie = await SInfo.getItem('poppit_cookie', {
            keychainService: POPPIT_KEYCHAIN
        });

        await SInfo.deleteItem('poppit_cookie', {
            keychainService: POPPIT_KEYCHAIN
        });

        console.log("POPPITGAMES :: _sendLogoutReq() :: Cookie content: ", poppitCookie)

        let url = `${HOSTNAME}/appuser/logout`;
        let logoutReqOpts = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cookie': poppitCookie
            }
        };

        console.log("POPPITGAMES :: _sendLogoutReq() :: BEFORE _sendRequest()")

        let res = await _sendRequest(url, logoutReqOpts);

        console.log("---------------------_sendLogoutReq() DONE------------------------------");

        return { success: true }
    } catch (error) {
        console.log("POPPITGAMES :: _sendLogoutReq() :: error: ", error);
        return {
            success: false,
            signin_error: "ERROR: Service unavailable, please contact support."
        }
    }
};

let _sendSignupReq = async (payload) => {
    console.log("---------------------_sendSignupReq()------------------------------");

    console.log("POPPITGAMES :: _sendSignupReq() :: START :")

    //clear cookies first
    await CookieManager.clearAll();

    // prep the signup request options
    let url = `${HOSTNAME}/appuser/signup`;
    let signupReqOpts = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    };

    console.log(`POPPITGAMES :: _sendSignupReq() :: BEFORE _sendRequest() :: url: ${url}`, payload)

    let res = await _sendRequest(url, signupReqOpts);

    console.log("POPPITGAMES :: _sendSignupReq() :: ATER _sendRequest() :: res:", res)

    console.log("---------------------_sendSignupReq() DONE------------------------------");

    return res;
};

let _sendRequest = async (url, opts) => {
    console.log("---------------------_sendRequest()------------------------------");

    let cookieHeader = "";

    console.log("POPPITGAMES :: _sendRequest() :: opts: ", opts)

    try {
        console.log("POPPITGAMES :: _sendRequest() :: CookieManager CLEARED")

        let res = await fetch(url, opts)

        console.log( `POPPITGAMES :: _sendRequest() :: res.headers.get("set-cookie") :: `, res.headers.get("set-cookie") )

        //set the cookie in the secure storage
        cookieHeader = res.headers.get("set-cookie")

        console.log("POPPITGAMES :: _sendRequest() :: THIS cookieHeader: ", cookieHeader);

        //set the cookie and return
        SInfo.setItem( 'poppit_cookie', cookieHeader, { keychainService: POPPIT_KEYCHAIN } );

        let resJson = await res.json()

        console.log("---------------------_sendRequest() DONE------------------------------");

        return resJson
    } catch (error) {
        console.log("POPPITGAMES :: _sendRequest() :: error: ", error);
        return {
            success: false,
            signin_error: "ERROR: Login service unavailable, please contact support."
        }
    }

    // try {
    //   response = await Promise.race([
    //     fetch(request),
    //     new Promise((_, reject) => setTimeout(
    //       () => reject(new Error('Timeout'),
    //       10000
    //     )),
    //   ]);
    // } catch (e) {
    //   if (error.message === 'Timeout'
    //     || error.message === 'Network request failed') {
    //     // fail, retry
    //   } else {
    //     throw e; // rethrow other unexpected errors
    //   }
    // }
    // try {
    //   const body = await response.json();
    // } catch (e) {
    //   // fail,retry
    // }
}

export {
    _sendSignupReq,
    _sendLoginReq,
    _sendLogoutReq,
    _checkCookie
}
