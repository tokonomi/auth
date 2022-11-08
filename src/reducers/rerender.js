const rerender = (n = 0, action) => {
    if(action.type === "RERENDER"){
        n += 1
        return n
    }return n
}

export default rerender