// actions
export const toggleEditorMaximize = () => ({
    type: 'TOGGLE_EDITOR_MAXIMIZE',
  });
  
  export const togglePreviewMaximize = () => ({
    type: 'TOGGLE_PREVIEW_MAXIMIZE',
  });
  
  export const updateMarkdown = (markdownText) => ({
    type: 'UPDATE_MARKDOWN',
    payload: markdownText,
  });