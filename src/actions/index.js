export const setUser = data => {
    return{
        type: 'SET_USER',
        payload: data
    }
}

export const signIn = (stat) => {
    return{
        type: 'SIGNED_IN',
        payload: stat
    }
}

export const otpRequest = (stat) => {
    return{
        type: 'OTP_REQUEST',
        payload: stat
    }
}

export const setOtp = (code) => {
    return{
        type: "SET_OTP",
        payload: code
    }
}
export const rerender = (n) => {
    return{
        type: "RERENDER",
        payload: n
    }
}