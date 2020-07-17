
const initialState = {
    test: "test"
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEST":
            return {
                ...state,
                test: action.payload
            }
    }
    return state;
};

export default testReducer;