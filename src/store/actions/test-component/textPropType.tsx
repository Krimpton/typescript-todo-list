import {complete, incomplete} from "../../store";
import {
    deleteTodoActionCreator,
    markCompleteActionCreator,
    markIncompleteActionCreator
} from "../actions-type/actionCreatorType";


interface TextPropType {
    complete: complete;
    incomplete: incomplete;
    deleteTodo: deleteTodoActionCreator;
    markComplete: markCompleteActionCreator;
    markIncomplete: markIncompleteActionCreator;
}

export default TextPropType;