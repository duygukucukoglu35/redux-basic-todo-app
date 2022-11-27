//kural 1:initial state
const initialState={
    counter:0
}
 
//kural 2:reducer oluşturulur
//action={type,payload}
//const[counter,setCounter]=useState()
const reducer=(state=initialState,{type})=>{
    switch (type) {
        case "ARTTIR":
            return{counter: state.counter +1}
        case "AZALT":
            return{counter: state.counter -1}
        case "RESETLE":
            return initialState
            default:
                return state;
    }

}