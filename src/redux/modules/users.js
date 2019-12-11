// imports
const API_URL = "http://localhost:8001";


// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const GET_EMOJILIST = "GET_EMOJILIST";

//action creators
function setLogIn(token){
    return{
        type : LOG_IN,
        token : token
    }
}
  
function setUser(User){
    return{
        type : SET_USER,
        User: User,
    }
}
  
function logOut(){
    return {
        type: LOG_OUT
    }
}

function getEmojilist(emojiList){
    return {
        type: GET_EMOJILIST,
        emojiList:emojiList
    }
}

// API Actions

function login(email,password){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');
    
    headers.append("Content-Type", "application/json");
    return dispatch => {
        return fetch(`${API_URL}/signin`,{
            method:"POST",
            headers: headers,
            body: JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(response => response.json())
        .then(json =>{
            if(json.token && json.User){
                dispatch(setLogIn(json.token));
                dispatch(setUser(json.User));
                return true;
            }else{
                return false;
            }
        })
        .catch(err => console.log(err));
    }
}
//function getUserinfo


// initial state
const initialState = {
    isLoggedIn: localStorage.getItem('jwt') || false,
    MyEmojiList:[],
};

// reducer
function reducer (state = initialState, action){
    switch(action.type){
        case LOG_IN:
            return applyLogIn(state,action);
        case LOG_OUT:
            return applyLogOut(state,action);
        case SET_USER:
            return applySetUser(state,action);
        //case GET_EMOJILIST
        default:
            return state;
    }
}
// reducer functions
function applyLogIn(state,action){
    const { token } = action;
    return {
        ...state,
        isLoggedIn: true,
        token: token,
    }
}
function applyLogOut(state, action) {
    localStorage.removeItem("jwt");
    return {
        isLoggedIn: false
    };
}
function applySetUser(state,action){
    const { User } = action;
    return {
        ...state,
        User: User,
    }
}

//exports
const actionCreators ={
    login,
};
export { actionCreators };


//reducer exports
export default reducer;