import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addMessage } from "../../actions/chat-actions.js";
import styles from "./SendMessageForm.less";

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { text } = this.state;

    let currentDate = new Date();
    let formattedDate =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getDate();

    e.preventDefault();
    this.props.addMessageToChat(
      this.props.chatId,
      text,
      this.props.recipientUserId,
      "recieved",
      formattedDate
    );

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

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
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  recipientUserId: state.recipient_user_id
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
