const initialState = {
    markdownText: '', // Initialize with an empty string
  }

const markdownConvert = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_MARKDOWN":
            return {
                ...state,
                markdownText: action.payload,
            };
        default: 
        return state;
    }
};

export default markdownConvert;