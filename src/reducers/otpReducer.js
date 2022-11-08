const otpEnabled = (stat = false, action) => {
    if(action.type === 'OTP_REQUEST'){
        stat = true
        return stat
    }return stat
}

export default otpEnabled