import React from 'react';
import './Formulario.css';
import { TextAlignment, VerticalAlignemnt } from './Constants'


export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messageAlignment: TextAlignment.left,
            messageVerticalAlignment: VerticalAlignemnt.middle,
            sourceAlignment: TextAlignment.right
        };
    
        this.onChangeMessageAlignment = this.props.onChangeMessageAlignment;
        this.onChangeMessagePosition = this.props.onChangeMessagePosition;
        this.onChangeSourceAlignment = this.props.onChangeSourceAlignment;
        this.onChangeOutline = this.props.onChangeOutline;
        this.onChangeMessageTextSize = this.props.onChangeMessageTextSize;
        this.onChangeSourceTextSize = this.props.onChangeSourceTextSize;
        this.onChangeOutline = this.props.onChangeOutline;
        this.onClickPreviousImage = this.props.onClickPreviousImage;
        this.onClickNextImage = this.props.onClickNextImage;
    }

    handleChangeAlignment(alignment) {
        if(alignment !== this.state.messageAlignment) {
            this.setState({
                messageAlignment: alignment
            });
            this.onChangeMessageAlignment(alignment);
        }
    }
    handleChangePosition(position) {
        if(position !== this.state.messageVerticalAlignment) {
            this.setState({
                messageVerticalAlignment: position
            });
            this.onChangeMessagePosition(position);
        }
    }
    handleChangeTextSize(size) {
        this.onChangeMessageTextSize(size);
    }
    handleChangeSourceAlignment(alignment) {
        if(alignment !== this.state.sourceAlignment) {
            this.setState({
                sourceAlignment: alignment
            });
            if(this.onChangeSourceAlignment)
                this.onChangeSourceAlignment(alignment);
        }
    }
    handleChangeSourceTextSize(size) {
        this.onChangeSourceTextSize(size);
    }
    handleChangeOutline(outline) {
        this.onChangeOutline(outline);
    }
    previousImage() {
        this.onClickPreviousImage();
    }
    nextImage() {
        this.onClickNextImage();
    }
    render() {
        return (
            <div>
                <form onSubmit={(event) => event.preventDefault()}>
                    <button onClick={() => this.previousImage()}>&larr;</button>
                    <button onClick={() => this.nextImage()}>&rarr;</button>
                </form>
                <br/>
                <form>
                    <span>
                        Text alignment
                    </span>
                    <div
                        className="alignment_options"
                    >
                        <label>
                            Left <br/><input type="radio" id="align_left" name="textAlignment" value={TextAlignment.left}
                            defaultChecked={this.state.messageAlignment === TextAlignment.left}
                            onClick={(event) => this.handleChangeAlignment(event.target.value)} />
                        </label>
                        <label>
                            Center <br/><input type="radio" id="align_center" name="textAlignment" value={TextAlignment.center}
                            defaultChecked={this.state.messageAlignment === TextAlignment.center}
                            onClick={(event) => this.handleChangeAlignment(event.target.value)} />
                        </label>
                        <label>
                            Right <br/><input type="radio" id="align_right" name="textAlignment" value={TextAlignment.right}
                            defaultChecked={this.state.messageAlignment === TextAlignment.right}
                            onClick={(event) => this.handleChangeAlignment(event.target.value)} />
                        </label>
                    </div>

                    <br />
                    <span>
                        Text position
                    </span>
                    <div
                        className="alignment_options"
                    >
                        <label>
                            Top <br/><input type="radio" id="align_left" name="verticalAlignment" value={VerticalAlignemnt.top}
                            defaultChecked={this.state.messageVerticalAlignment === VerticalAlignemnt.top}
                            onClick={(event) => this.handleChangePosition(event.target.value)} />
                        </label>
                        <label>
                            Middle <br/><input type="radio" id="align_center" name="verticalAlignment" value={VerticalAlignemnt.middle}
                            defaultChecked={this.state.messageVerticalAlignment === VerticalAlignemnt.middle}
                            onClick={(event) => this.handleChangePosition(event.target.value)} />
                        </label>
                        <label>
                            Bottom <br/><input type="radio" id="align_right" name="verticalAlignment" value={VerticalAlignemnt.bottom}
                            defaultChecked={this.state.messageVerticalAlignment === VerticalAlignemnt.bottom}
                            onClick={(event) => this.handleChangePosition(event.target.value)} />
                        </label>
                    </div>
                    <br />

                    <div>
                        <label>
                            Text size (px): <input type="number" id="tentacles" name="tentacles" min="10" max="100"
                            defaultValue={this.props.defaultMessageSize}
                            onChange={(event) => this.handleChangeTextSize(event.target.value)}
                            />
                        </label>
                    </div>
                </form>
                
                <br />
                <br />
                <br />
                <form>
                    <span>
                        Text alignment
                    </span>
                    <div
                        className="alignment_options"
                    >
                        <label>
                            Left <br/><input type="radio" id="align_left" name="drone" value={TextAlignment.left}
                            defaultChecked={this.state.sourceAlignment === TextAlignment.left}
                            onClick={(event) => this.handleChangeSourceAlignment(event.target.value)} />
                        </label>
                        <label>
                            Center <br/><input type="radio" id="align_center" name="drone" value={TextAlignment.center}
                            defaultChecked={this.state.sourceAlignment === TextAlignment.center}
                            onClick={(event) => this.handleChangeSourceAlignment(event.target.value)} />
                        </label>
                        <label>
                            Right <br/><input type="radio" id="align_right" name="drone" value={TextAlignment.right}
                            defaultChecked={this.state.sourceAlignment === TextAlignment.right}
                            onClick={(event) => this.handleChangeSourceAlignment(event.target.value)} />
                        </label>
                    </div>
                
                    <div>
                        <label>
                            Source text size (px): <input type="number" id="tentacles" name="tentacles" min="10" max="100"
                            defaultValue={this.props.defaultSourceSize}
                            onChange={(event) => this.handleChangeSourceTextSize(event.target.value)}
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
