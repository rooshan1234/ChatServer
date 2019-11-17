import { ADD_MESSAGE } from "../actions/chat-actions";

function messages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, {
                chats: state.chats.map(chat => {
                    if (chat.id === action.chatId) {
                        // chat is found
                        // we don't mutate the state here as per the rules of redux-store
                        return Object.assign({}, chat, {
                            // update the list of messages for that chat
                            messages: [
                                ...chat.messages,
                                {
                                    text: action.text,
                                    message_type: action.message_type,
                                    date_message_sent: action.date_message_sent
                                }
                            ]
                        });
                    }
                    // chat not found
                    return chat;
                })
            });
        default:
            return state;
    }
}

export default messages;