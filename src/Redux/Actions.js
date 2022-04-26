import axios from 'axios'
import history from '../history'

const CategoryUrl = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories'
const AllBook = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=0&page=0&size=0'

export const handlePush = (location) => {
    setTimeout(() => {
        history.push(location)
        window.location.reload()
    }, 2000);
}

export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const postDataSuccess = (datas) => ({
    type: 'POST_DATA_SUCCESS',
    datas,
});
const postDataFailure = (err) => ({
    type: 'POST_DATA_FAILURE',
    err,
});

const getAllBookSuccess = (datas) => ({
    type: 'GET_ALLBOOK_SUCCESS',
    datas,
});
const getAllBookFailure = (err) => ({
    type: 'GET_ALLBOOK_FAILURE',
    err,
});

export const getCategory = () => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(CategoryUrl)
            .then(function (response) {
                dispatch(postDataSuccess(response.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postDataFailure(error))
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};

export const getAllBook = (id, page, size) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}&page=${page}&size=${size}&title="The Five Dysfunctions of a Team"`)
            .then(function (response) {
                dispatch(getAllBookSuccess(response.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(getAllBookFailure(error))
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};