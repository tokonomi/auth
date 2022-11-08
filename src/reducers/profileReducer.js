const profileData = (profile = {}, action) => {
    if(action.type === 'SET_USER'){
        profile = action.payload
        return action.payload
    }
    return profile
}

export default profileData;