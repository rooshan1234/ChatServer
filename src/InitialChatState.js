import { MessageType } from "./app/chat/messages/MessageType";

export const initialState = {
    // all on-going chats

    // chat structure:
    // - send_user_id: the user sending messages to the recipient
    // - recipient_user_id: the user recieving messages from sender

    // chat message structure:
    // - text: the message being sent
    // - date_message_sent: "2019-10-10"
    // - message_type:
    //   - sender_to_recipient (from sender to recipient),
    //   - recipient_to_sender (from recipient to sender)
    chats: [{
            id: "1",
            sender_user_id: "2",
            recipient_user_id: "1",
            messages: [{
                    text: "Froggos have a little joke, that the world is so hard a man must have two fathers to look after him, and that's why they have God Froggers",
                    message_type: MessageType.SENDER_TO_RECIPIENT,
                    date_message_sent: "2019-10-10"
                },
                {
                    text: "I'll make him an ofer he can't refuse.",
                    message_type: MessageType.SENDER_TO_RECIPIENT,
                    date_message_sent: "2019-10-11"
                },
                {
                    text: "The froggo with the long tongue can steal more fies than the man with the gun",
                    message_type: MessageType.RECIPIENT_TO_SENDER,
                    date_message_sent: "2019-10-12"
                }
            ]
        },
        {
            id: "2",
            sender_user_id: "3",
            recipient_user_id: "1",
            messages: [{
                    text: "Froggos love playing basketball!",
                    message_type: MessageType.SENDER_TO_RECIPIENT,
                    date_message_sent: "2019-11-02"
                },
                {
                    text: "Liar Liar!",
                    message_type: MessageType.SENDER_TO_RECIPIENT,
                    date_message_sent: "2019-11-03"
                }
            ]
        },
        {
            id: "3",
            sender_user_id: "4",
            recipient_user_id: "1",
            messages: [{
                    text: "Vito can't touch this!",
                    message_type: MessageType.SENDER_TO_RECIPIENT,
                    date_message_sent: "2019-09-22"
                },
                {
                    text: "Hammer time!",
                    message_type: MessageType.RECIPIENT_TO_SENDER,
                    date_message_sent: "2019-09-23"
                }
            ]
        }
    ],
    // users in the system
    users: [{
            id: "1",
            name: "Vito Croakleone",
            avatar_url: "https://react.semantic-ui.com/images/avatar/small/matthew.png"
        },
        {
            id: "2",
            name: "Sonny",
            avatar_url: "https://react.semantic-ui.com/images/avatar/small/tom.jpg"
        },
        {
            id: "3",
            name: "Fredo",
            avatar_url: "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        },
        {
            id: "4",
            name: "Michael",
            avatar_url: "https://react.semantic-ui.com/images/avatar/small/christian.jpg"
        }
    ]
};