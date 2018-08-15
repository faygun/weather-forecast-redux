import axios from 'axios';

const API_KEY = '550132814d8950ee055b02f53f19abc8';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SET_ERROR = 'SET_ERROR';

export function setError(errors){
     return(
         {
            type : SET_ERROR,
            payload : errors,
         }
     );
}

export function fetchWeatherData(data){
    return(
        {
            type: FETCH_WEATHER,
            payload : data
        }
    );
}

export function fetchWeather(city){
    return function action(dispatch){
        dispatch({type:FETCH_REQUEST})
        const url = `${ROOT_URL}&q=${city},de`;
        const request = axios.get(url);

        return request.then(response => dispatch(fetchWeatherData(response)),
                        err=> dispatch(setError(err))
        );
    }
}