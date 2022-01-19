import shopType from "./shop.type";
import {firestore, getCollection} from "../../firebase/firebase.utils";

export const changeParam = param=>({
    type:shopType.CHANGEPARAMS,
    payload:param
})

export const fetchCollectionStart = () =>({
    type:shopType.FETCH_COLLECTIONS_START,
})

export const fetchCollectionFailure = (error) =>({
    type:shopType.FETCH_COLLECTIONS_FAILURE,
    payload:error
})

export const fetchCollectionSuccess = (collection) =>({
    type:shopType.FETCH_COLLECTIONS_SUCCESS,
    payload:collection
})

export const fetchCollectionStartAsync = () =>{
    return async dispatch=>{
        try {
            const collection = await getCollection(firestore.collection("collections"));
            dispatch(fetchCollectionSuccess(collection));
        } catch(error){
            dispatch(fetchCollectionFailure(error.message));
        }
    }
}