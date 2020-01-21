import React from "react";


class RequiredEmailInput extends React.Component {


    state = {
        value: ""
    }


    // onChangeInput = (event) => {
    //     this.setState({value: event.target.value})  
    // }

    checkEmail = (event) => {

        if (!event.target.value.match(/\S+@\S+\.\S+/)) { // Jaymon's / Squirtle's solution
            // Do something
            return this.setState({ value: event.target.value, chec: false });
        }
        if (event.target.value.indexOf(' ') !== -1 || event.target.value.indexOf('..') !== -1) {
            // Do something
            return this.setState({ value: event.target.value, chec: false });
        }
        return this.setState({ value: event.target.value, chec: true });
    }

    render() {

        return (

            <div className="div_for_input">
                <input type="email" name="text" className="input_text" value={this.state.value}
                    onChange={this.checkEmail} placeholder="Enter e-mail..." />
                
                {this.state.chec && <p>	&#10004; Ok </p>}
                
                {(!this.state.chec && this.state.value) && <p> &lArr; &emsp;E-mail is not corected!</p>}
                
                {!this.state.value && <p> &lArr; &emsp;Field is required</p>}

            </div>
        )
    }
}

export default RequiredEmailInput;