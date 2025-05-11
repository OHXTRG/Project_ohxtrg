import {useDispatch }  from "react-redux"
import axios from 'axios'
const dispatch = useDispatch();

export const login = async (data)=>{
    try {
        dispatch({ type: "FETCH_USER_REQUEST" });
        const response = await 
        
    } catch (error) {
        
    }
}