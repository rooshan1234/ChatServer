export const ADD_MESSAGE = "ADD_MESSAGE";

export function addMessage(
    chat_id,
    text,
    user_id,
    message_type,
    date_message_sent
) {
    return {
        type: ADD_MESSAGE,
        chat_id,
        text,
        user_id,
        message_type,
        date_message_sent
    };
}