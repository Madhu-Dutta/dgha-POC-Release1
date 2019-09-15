import React from "react";

const TRANSLATION_API = '/.netlify/functions/translation';

export default class Translate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translating: false,
            content: props.children
        };
    }

    componentDidMount() {
        if(this.props.to !== null && this.props.to !== this.props.from)
            this.doTranslate(this.props.children, this.props.from, this.props.to).then(text =>
                this.setState({translating: false, text}));
    }

    componentDidUpdate(oldProps) {
        if(oldProps === this.props) return; // Disregard update if there is no change in props

        if(this.props.to !== null && this.props.to !== oldProps.to) {
            this.setState({
                translating: true
            })

            this.doTranslate(this.props.children, this.props.from, this.props.to).then(content =>
                this.setState({translating: false, content}));
        } else if(this.props.to === null || this.props.to === this.props.from) {
            this.setState({translating: false, content: this.props.children});
        }
    }

    render = () => <div>
        {this.state.translating ? 'Translating...' : this.state.content}
    </div>;

    /**
     * Perform a translation, returns translated component
     * Recursively calls self in the event of an array input or a React element input
     * @param input Input content
     * @param fromLang Langauge to translate from
     * @param toLang Language to translate to 
     */
    async doTranslate(input, fromLang, toLang)
    {
        if(input instanceof Array) {
            let resolvedOutputs = [];
            for(let el of input) resolvedOutputs.push(await this.doTranslate(el, fromLang, toLang));
            return resolvedOutputs;
        } else if(typeof(input) === 'string') {
            let response = await fetch(`${TRANSLATION_API}?to=${toLang}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([input])
            });
            return (await response.json())[0];
        } else {
            if(input.props.children === undefined) return input;
            return React.createElement(input.type, {
                ...input.props,
                children: await this.doTranslate(input.props.children, fromLang, toLang)
            })
        }
    }
}