import React, {Component} from 'react';

class DialogPicture extends Component {


    componentWillMount(){
        console.log(this.props.isVisible);

    }
    // listenerForNextClick = function () {
    //     console.log('hit');
    // }

    render(){
        if (this.props.isVisible === true) {
            let style = {
                display: "inline-block"
            }


            return (
                <div className="dialog-box">
                    <img src={this.props.image}></img>
                </div>
            )
        }
        else if (this.props.isVisible === false) {
            let style = {
                display: "none"
            }
            return (

                <div style={style} className="dialog-box">
                    <img src={this.props.image}></img>
                </div>
            )
        }
    }
}

export default DialogPicture;