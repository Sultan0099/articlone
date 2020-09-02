import axios from "axios";

export const test = () => async dispatch => {
    const res = await axios.get("/api/v1/check");
    console.log(res);
    dispatch({ type: "TEST", payload: res.data });
}