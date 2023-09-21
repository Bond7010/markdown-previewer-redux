import toggleWindow from './toggleWindow';
import markdownConvert from './markdownConvert';
import {combineReducers} from 'redux';

const allReducers = combineReducers ( {
   editorPreview: toggleWindow, 
   markdownConvert: markdownConvert
}
)

export default allReducers;