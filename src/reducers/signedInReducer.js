const signedIn = (value = false, action) => {
    if(action.type === "SIGNED_IN"){
        value = true
        return value
    }
    return value
}

export default signedIn