import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextAlignment, VerticalAlignemnt } from './Constants'
import Formulario from './Formulario';
import MessageLayout from './MessageLayout';
import html2canvas from 'html2canvas';
import { ImagesArray } from './Images';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'A'};
    this.image = React.createRef();
    this.prints = React.createRef();
    this.state = {
      messageAlignment: TextAlignment.left,
      messageVerticalAlignment: VerticalAlignemnt.middle,
      sourceAlignment: TextAlignment.right,
      outline: false,
      messageTextSize: 20,
      sourceTextSize: 16,
      indexImage: 0,
    }
  }

  nextImage() {
    let indexImage = this.state.indexImage;
    if(indexImage === ImagesArray.length - 1) {
      indexImage = -1;
    }

    indexImage += 1;
    
    this.setState({
      indexImage: indexImage
    });
    console.log("nextImage ", indexImage)

  }

  previousImage() {

    let indexImage = this.state.indexImage;
    if(indexImage === 0) {
      indexImage = ImagesArray.length;
    }

    indexImage -= 1;
    
    this.setState({
      indexImage: indexImage
    });
    console.log("previousImage ", indexImage)
    
  }

  render() { 
    return (
      <div className="App">
        <div
          className='message-layout-container'
        >
          <MessageLayout
            containerRef={this.image}
            messageAlignment={this.state.messageAlignment}
            messageVerticalAlignment={this.state.messageVerticalAlignment}
            sourceAlignment={this.state.sourceAlignment}
            outline={this.state.outline}
            messageTextSize={this.state.messageTextSize}
            sourceTextSize={this.state.sourceTextSize}
            backgroundImageSource={ImagesArray[this.state.indexImage]}
          />
        </div>
        <div className='buttons-container'>
          <button
            onClick={() => this.handleClick()}
          >
            Salvar
          </button>
        </div>
        <div
          className="settings-container"
        >
          <Formulario 
            onChangeMessageAlignment={(messageAlignment) => { console.log("MessageAlignment", messageAlignment); this.setState({messageAlignment})}}
            onChangeMessagePosition={(messageVerticalAlignment) => { console.log("MessageAlignment", messageVerticalAlignment); this.setState({messageVerticalAlignment})}}
            onChangeSourceAlignment={(sourceAlignment) => this.setState({sourceAlignment})}
            onChangeOutline={(outline) => this.setState({outline})}
            onChangeMessageTextSize={(messageTextSize) => this.setState({messageTextSize})}
            onChangeSourceTextSize={(sourceTextSize) => this.setState({sourceTextSize})}
            onClickPreviousImage={() => this.previousImage()}
            onClickNextImage={() => this.nextImage()}
            defaultMessageSize={this.state.messageTextSize}
            defaultSourceSize={this.state.sourceTextSize}
          />
        </div>
        <div
          ref={this.prints}
        >

        </div>
      </div>
    );
  }

  handleClick() {
    if(this.state.outline) {
      this.setState({
        outline: false
      }, () => {
        this.saveImage();
        this.setState({outline: true});
      })
    }

    this.saveImage();
  }


  saveImage() {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    window.scrollTo(0,0);
    html2canvas(this.image.current).then((image) => {
      window.scrollTo(scrollX, scrollY);
      this.saveAs(image.toDataURL(), 'image.png')

    });
  }

  saveAs(uri, filename) {
    var link = document.createElement('a');
    link.className = 'link';
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      // document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
}