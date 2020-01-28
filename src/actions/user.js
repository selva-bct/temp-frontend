import { 
    FETCH_USER_BY_TOKEN_REQUESTING
} from '../constant/user';


export const fetchUserByToken = (data) => ({
    type: FETCH_USER_BY_TOKEN_REQUESTING,
    data
});