export const ADD_MESSAGE = "ADD_MESSAGE";

export function addMessage(chatId, text, message_type, date_message_sent) {
    return {
        type: ADD_MESSAGE,
        chatId,
        text,
        message_type,
        date_message_sent
    };
}