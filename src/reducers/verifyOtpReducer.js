const verifyOtp = (otp='', action) => {
    if(action.type === 'SET_OTP'){
        otp = action.payload
        return otp
    }return otp
}

export default verifyOtp;