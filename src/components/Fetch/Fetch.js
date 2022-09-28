

import axios from "axios";

const KEY = "29206449-c7acbb0b478066fae72cee790";
const URL = "https://pixabay.com/api";

const instance = axios.create({
    baseURL: URL,
    params: {
        per_page: 12,
        key: KEY,
        image_type: "photo",
        orientation: "horizontal",
    }
});



export const getPixabayAPI = async (page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            page,
        }
    });
    return data;
}

export const searchPixabayAPI = async (q, page = 1) => {
    const { data } = await instance.get("/", {
        params: {
        page,
        q,
    }
    });
return data;
}