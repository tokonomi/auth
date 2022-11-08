import { combineReducers } from "redux";

import profileData from "./profileReducer";
import otpEnabled from "./otpReducer";
import verifyOtp from "./verifyOtpReducer";
import signedIn from "./signedInReducer";
import rerender from "./rerender";

export default combineReducers({
    profileData,
    otpEnabled,
    verifyOtp,
    signedIn,
    rerender
})