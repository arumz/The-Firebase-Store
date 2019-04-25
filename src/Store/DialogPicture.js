import React, {Component} from 'react';

class DialogPicture extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: null
        }

        this.componentDidMount = function() {
            document.body.addEventListener('click', this.listenerForNextClick);

        }
        this.componentWillUnmount = function() {
            document.body.removeEventListener('click', this.listenerForNextClick);


        }


    }
    listenerForNextClick = function () {
        console.log('hit');
    }

    render(){

        let style = {
            display: this.state.display
        }
        return(
            <div style = {style} className = "dialog-box">
                <img src = {this.props.image}></img>
            </div>
        )
    }
}

export default DialogPicture;