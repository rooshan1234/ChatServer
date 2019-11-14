import React from "react";
import { Form, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addMessage } from "../../actions/chat-actions.js";
import styles from "./SendMessageForm.less";

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", botherEveryone: false };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleChangeOnCheckBox = (e, { name, checked }) => {
    this.setState({ [name]: checked });
  };

  handleSubmit = e => {
    const { text, botherEveryone } = this.state;

    let currentDate = new Date();
    let formattedDate =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getDate();

    e.preventDefault();

    if (botherEveryone) {
      this.props.chats.map(chat => {
        this.props.addMessageToChat(
          chat.id,
          text,
          this.props.recipientUserId,
          "recieved",
          formattedDate
        );
      });
    } else {
      this.props.addMessageToChat(
        this.props.chatId,
        text,
        this.props.recipientUserId,
        "recieved",
        formattedDate
      );
    }

    this.setState({ text: "", botherEveryone: false });
  };

  render() {
    const { text, botherEveryone } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.TextArea
            width={16}
            name="text"
            placeholder="Message..."
            value={text}
            onChange={this.handleChange}
          />
          <Form.Button
            className={styles.sendButton}
            color={"blue"}
            content="Send"
          />
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <Checkbox
              name="botherEveryone"
              label="Bother Everyone"
              checked={botherEveryone}
              onChange={this.handleChangeOnCheckBox}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  recipientUserId: state.recipient_user_id,
  chats: state.chats
});

const mapDispatchToProps = dispatch => ({
  addMessageToChat: (chatId, text, user_id, message_type, date_message_sent) =>
    dispatch(addMessage(chatId, text, user_id, message_type, date_message_sent))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SendMessageForm)
);
