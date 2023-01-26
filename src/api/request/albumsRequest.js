import { axiosRequest } from "../../utils/axiosConfig";
import { requestsLinks } from "../endpoints";

export const albumsRequest = {
    getAll: () => axiosRequest.get(requestsLinks.albums),
}
