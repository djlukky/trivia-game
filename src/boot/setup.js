import React from "react";
import { Provider } from "react-redux";

import {configureStore} from "./configureStore";
import App from "../App";

//export interface Props {}

export interface State {
	store: Object
}

export default class Setup extends React.Component<Props, State> {
	constructor() {
		super();
		this.state = {
			store: configureStore(),
		};
	}

	render() {
		return (
				<Provider store={this.state.store}>
					<App />
				</Provider>
		);
	}
}
