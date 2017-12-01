import React, { Component } from "react";

class EvenClicks extends Component {

constructor(props) {

   super(props);
   this.clicked = this.clicked.bind(this);
   this.state = {
   even: true,
        };
    }   

    clicked() {
        console.log("Clicked");
        this.setState({
        even: !this.state.even,
        })
    }

     render() {
     	let text = this.state.even ? "Even" : "Odd";

        return (
        	 <div style= {{ margin_top: '20px', height: '30px', width: '200px', background: 'lightgrey', border: '5px solid teal'}} onClick={ this.clicked }>
             <p className="text-center"><strong> {text} </strong></p>
            </div>
        );
    }
}
export default EvenClicks;
