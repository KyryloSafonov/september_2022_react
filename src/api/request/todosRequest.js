import { axiosRequest } from "../../utils/axiosConfig";
import { requestsLinks } from "../endpoints";

export const todosRequest = {
    getAll: () => axiosRequest.get(requestsLinks.todos)
}
