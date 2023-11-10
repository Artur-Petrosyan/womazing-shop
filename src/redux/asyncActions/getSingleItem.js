import { API } from "../../api"
import { singleItem } from "../actions/getSingleItem"

export const getSingleItem = (id) => {
    return async (dispatch) => {
        await API.getSingleItem.getSingleItem(id)
            .then(resp => dispatch(singleItem(resp)))
            .catch(err => console.log(err))
    }
}