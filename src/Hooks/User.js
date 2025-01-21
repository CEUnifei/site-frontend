import { useMutation } from "react-query";
import axios from "axios";

function createUser(userData) {
    return axios.post(`${process.env.REACT_APP_DATABASE_URL}/user/add-user`, userData);
}

function useCreateUser(onSuccess, onError) {
    return useMutation(createUser, {
        onSuccess,
        onError,
    });
}

export default useCreateUser;
