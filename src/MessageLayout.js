import React from 'react';
import './MessageLayout.css';

export default class MessageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.defaultMessage = props.defaultMessage || 'Your message here';
        this.defaultSource = props.defaultSource || 'Yoursourcehere';
        this.state = {
            messageAlignment: this.props.messageAlignment,
            messageVerticalAlignment: this.props.messageVerticalAlignment,
            sourceAlignment: this.props.sourceAlignment,
            outline: this.props.outline,
            messageTextSize: this.props.messageTextSize,
            sourceTextSize: this.props.sourceTextSize,
            backgroundImageSource: this.props.backgroundImageSource
        };
    }

    render() {
        return (
            <div className='ratio-container'
                ref={this.props.containerRef}
            >
                <img className="background-image" 
                    src={this.props.backgroundImageSource}></img>
                <div className='content-container'>
                    <div
                        style={{
                            fontSize:`${this.props.messageTextSize ||20}px`
                        }}
                        className='message-container'
                    >
                        <span className={`
                            message
                            vertical-align-${this.props.messageVerticalAlignment}
                            text-align-${this.props.messageAlignment}
                            ${this.props.outline ? 'outline' : ''}
                        `}
                        spellCheck={false}
                        contentEditable>
                            {this.defaultMessage}
                        </span>
                    </div>

                    <div
                        className='source-container'
                        style={{
                            fontSize:`${this.props.sourceTextSize || 10}px`
                        }}
                    >
                        <span contentEditable spellCheck={false} className={`
                            source
                            text-align-${this.props.sourceAlignment}
                            ${this.props.outline ? 'outline' : ''}
                            `} >
                            {this.defaultSource}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}