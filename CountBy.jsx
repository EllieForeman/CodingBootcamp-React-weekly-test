import React, { Component } from "react";

class CountBy extends Component {

constructor(props) { //this is a class which uses component and is bringing in props//

   super(props);
   this.inc = this.inc.bind(this);
   this.state = {
   value: 0,
        };
    }   

    inc() { //this is linked to click with 'OnClick' below - which then calls this function
        console.log("incremenet by 5");
        this.setState({
        value: this.state.value + +this.props.step, //this in turn changes the initial value of 0 to - 0 + step
        })
    }

     render() {
        return (
            <button style= {{ margin: '20px'}} type="button" class="btn btn-info" onClick={ this.inc } >{this.state.value} </button> 
        );
    }
}
export default CountBy;