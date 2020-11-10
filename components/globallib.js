import { POPPIT_KEYCHAIN } from '../components/globalconstants';

import SInfo from 'react-native-sensitive-info';

let _checkCookie = async (opts) => {
    console.log("POPPITGAMES :: _checkCookie() :: START :")

    let url = "http://poppitgames.mynetgear.com:7777/appuser/check";

    let loginReqOpts = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': opts.cookie
        }
    };

    console.log("POPPITGAMES :: _checkCookie() :: BEFORE _sendrequest()")

    let res = await _sendrequest(url, loginReqOpts);

    console.log("POPPITGAMES :: _checkCookie() :: ATER _sendrequest() :: res:", res)

    console.log("POPPITGAMES :: _checkCookie() :: DONE")
    return res;
}

let _sendLoginReq = async (opts) => {

    console.log("POPPITGAMES :: _sendLoginReq() :: START :")

    let url = "http://poppitgames.mynetgear.com:7777/appuser/login";

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

    console.log("POPPITGAMES :: _sendLoginReq() :: BEFORE _sendrequest()")

    let res = await _sendrequest(url, loginReqOpts);

    console.log("POPPITGAMES :: _sendLoginReq() :: ATER _sendrequest() :: res:", res)

    console.log("POPPITGAMES :: _sendLoginReq() :: DONE")

    return res;
};

let _sendrequest = async (url, loginReqOpts) => {
    const CookieManager = require("react-native-cookies")

    let cookieHeader = "";

    console.log("POPPITGAMES :: _sendLoginReq() :: loginReqOpts: ", loginReqOpts)

    try {
        await CookieManager.clearAll();

        console.log("POPPITGAMES :: _sendLoginReq() :: CookieManager CLEARED")

        let loginRes = await fetch(url, loginReqOpts)

        console.log( `POPPITGAMES :: _sendLoginReq() :: loginRes.headers.get("set-cookie") :: `, loginRes.headers.get("set-cookie") )

        //set the cookie in the secure storage
        cookieHeader = loginRes.headers.get("set-cookie")

        //set the cookie and return
        SInfo.setItem( 'poppit_cookie', cookieHeader, { keychainService: POPPIT_KEYCHAIN } );

        let loginResJson = await loginRes.json()

        console.log("POPPITGAMES :: _sendLoginReq() :: loginResJson: ", loginResJson);

        return loginResJson
    } catch (error) {
        console.log("POPPITGAMES :: _sendLoginReq() :: error: ", error);
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

let _sendLogoutReq = async (opts) => {
    const CookieManager = require("react-native-cookies")

    try {
        await CookieManager.clearAll();

        return SInfo.deleteItem('key1', {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
        });
    } catch (e) {
        console.log("POPPITGAMES :: _sendLogoutReq() :: error: ", error);
        return {
            success: false,
            signin_error: "ERROR: Login service unavailable, please contact support."
        }
    }
};

export {
    _sendLoginReq,
    _sendLogoutReq,
    _checkCookie
}
