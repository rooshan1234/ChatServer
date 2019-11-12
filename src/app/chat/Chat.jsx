import React from "react";
import {withRouter, Route, Switch} from "react-router-dom";
import {Segment, Container} from "semantic-ui-react";

import Messages from "./messages/Messages";
import SendMessageForm from "./forms/SendMessageForm.jsx";
import chatStyles from "./ChatStyles.less";

class Chat extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
				<Switch>
					<Route
							path={"/chat/:chatId"}
							render={props => {
								return (
										<React.Fragment>
											<Segment className={chatStyles.messagesList}>
												<Messages chatId={props.match.params.chatId}/>
											</Segment>
											<Segment attached="bottom">
												<Container fluid>
													<SendMessageForm
															chatId={props.match.params.chatId}
													/>
												</Container>
											</Segment>
										</React.Fragment>
								);
							}}
					/>

					{/*Handles a base case where if the user first loads to the page, it will show the first chat */}
					<Route
							path={"/"}
							render={props => {
								return (
										<React.Fragment>
											<Segment className={chatStyles.messagesList}>
												<Messages chatId="1"/>
											</Segment>
											<Segment attached="bottom">
												<Container fluid>
													<SendMessageForm chatId="1"/>
												</Container>
											</Segment>
										</React.Fragment>
								);
							}}
					/>
				</Switch>
		);
	}
}

export default withRouter(Chat);
