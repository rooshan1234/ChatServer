export const ADD_MESSAGE = "ADD_MESSAGE";

export function addMessage(chat_id, sender_user_id, receiver_user_id, text) {
    return {
        type: ADD_MESSAGE,
        chat_id,
        sender_user_id,
        receiver_user_id,
        text
    };
}