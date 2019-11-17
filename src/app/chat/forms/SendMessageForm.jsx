import React from "react";
import { Form, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addMessage } from "../../actions/chat-actions.js";
import { MessageType } from "../messages/MessageType.jsx";
import { getCurrentDateFormatted } from "../formatters/DateFormatters.js";
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.chat.id && prevProps.chat.id !== this.props.chat.id) {
      this.setState({ text: "", botherEveryone: false });
    }
  }

  handleSubmit = e => {
    const { text, botherEveryone } = this.state;

    e.preventDefault();

    let currentDate = getCurrentDateFormatted();

    if (botherEveryone) {
      this.props.chats.map(chat => {
        this.props.addMessageToChat(
          chat.id,
          text,
          MessageType.RECIPIENT_TO_SENDER,
          currentDate
        );
      });
    } else {
      this.props.addMessageToChat(
        this.props.chat.id,
        text,
        MessageType.RECIPIENT_TO_SENDER,
        currentDate
      );
    }

    this.setState({ text: "" });
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
  // used for sending messages to all
  chats: state.chats
});

const mapDispatchToProps = dispatch => ({
  addMessageToChat: (chatId, text, message_type, date_message_sent) =>
    dispatch(addMessage(chatId, text, message_type, date_message_sent))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SendMessageForm)
);
