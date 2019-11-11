import { ADD_MESSAGE } from "../actions/chat-actions";

function messages(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, {
                chats: state.chats.map(chat => {
                    if (chat.id === action.chat_id) {
                        // chat is found
                        return Object.assign({}, chat, {
                            // update the list of messages for that chat
                            messages: [
                                ...chat.messages,
                                {
                                    sender_user_id: action.sender_user_id,
                                    receiver_user_id: action.receiver_user_id,
                                    text: action.text
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