

const initialState = {
    isLoading: false,
    datas: [],
    allbook: []
}
const Datas = (state = initialState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, isLoading: !state.isLoading };
        case 'POST_DATA_SUCCESS':
            return { ...state, datas: action.datas }
        case 'GET_ALLBOOK_SUCCESS':
            return { ...state, allbook: action.datas }
        default:
            return state
    }

}

export default Datas