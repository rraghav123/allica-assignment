import axios from "axios";

export const makeApiGetCall = async ({ url }) => {
    return await axios.get(url);
}