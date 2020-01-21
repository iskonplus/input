import React from "react";


class RequiredInput extends React.Component {

        state = {
            value: ""
        }
    
    onChangeInput = (event) => {
        this.setState({value: event.target.value})  
    }

    render() {

        return (

            <div className="div_for_input">
                <input type="text" name="text" className="input_text" value={this.state.value}
                    onChange={this.onChangeInput} placeholder="Enter message..."/>
                {this.state.value ?
                    <p>	&#10004; Ok </p> :
                    <p> &lArr; &emsp;Field is required</p>}
                
                
            </div>
        )
    }
}

export default RequiredInput;