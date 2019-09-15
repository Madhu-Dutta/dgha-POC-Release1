import React from "react";
import Translate from './translate';

export default class TranslateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: false
        };
    }

    handleBtn = () => this.setState({translate: !this.state.translate});

    render = () => <div>
        <button onClick={this.handleBtn}>{this.state.translate ? 'Stop Translating' : 'Translate'}</button>
        <Translate from={this.props.from} to={this.state.translate ? this.props.to : null}>{this.props.children}</Translate>
    </div>;
}