export const ADD_MESSAGE = "ADD_MESSAGE";

export function addMessage(chat_id, text, user_id, message_type) {
    return {
        type: ADD_MESSAGE,
        chat_id,
        text,
        user_id,
        message_type
    };
}