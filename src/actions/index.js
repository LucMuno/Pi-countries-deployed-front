import axios from 'axios';

export function getCountries(){
    return async function(dispatch){
        var json = await axios.get("https://countries-app-deploy.herokuapp.com/countries");
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}
export function filterCountriesByContinent(payload){
    console.log(payload)
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}
export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}
export function orderByPopulation(payload){
    return{
        type: 'ORDER_BY_POPULATION',
        payload
    }
}
export function getNameCountries(name){
    return async function(dispatch){
        try{
            var json = await axios.get("https://countries-app-deploy.herokuapp.com/countries?name=" + name)
            return dispatch({
                type: 'GET_NAME_COUNTRIES',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function postTouristActivity(payload){
    return async function(dispatch){
        try{
        var json = await axios.post("https://countries-app-deploy.herokuapp.com/activities", payload);
        return dispatch({
            type: 'POST_TOURIST_ACTIVITY',
            payload : json
        });
        }catch(error){
            console.log('aqui',error)
        }
    }
}
export function getActivity(){
    return async function(dispatch){
        var json = await axios.get("https://countries-app-deploy.herokuapp.com/activities");
        return dispatch({
            type: 'GET_ACTIVITY',
            payload: json.data
        })
    }
}
export function filterCountryByActivity(payload) {
    console.log(payload)
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
}};
export function getDetail(id) {
    return async function (dispatch) {
        try{
            var json = await axios.get("https://countries-app-deploy.herokuapp.com/countries/"+id)
            return  dispatch({
                type: 'GET_DETAIL',
                payload : json.data
            });
        }catch(e){
        console.log(e);
}}};

