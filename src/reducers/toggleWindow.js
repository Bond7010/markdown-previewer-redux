const initialState = {
  // Define your initial state properties here
  //count: 0,
  editorMaximized: false,
  previewMaximized: false,
};

const  toggleWindow = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_EDITOR_MAXIMIZE':
      return {
        ...state,
        editorMaximized: !state.editorMaximized,
      };
    case 'TOGGLE_PREVIEW_MAXIMIZE':
      return {
        ...state,
        previewMaximized: !state.previewMaximized,
      };
    default:
      return state;
  }

}

export default toggleWindow;