import React, { Component } from 'react';

const TimeInputForm {
  constructor(props) {
    super(props);

    this.state = {
      timeInput: "00:00:00",
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  handleTimeInputChange = (event) => {
    const value = event.target.value;
    this.setState({ timeInput: value });
    console.log(value)

    // Parse the input and update hours, minutes, and seconds
    const [hours, minutes, seconds] = value.split(":").map(Number);
    this.setState({ hours, minutes, seconds });
    console.log({hours, minutes, seconds})
  }

  render() {
    return (
      <div className='w-full'>
          <label className="label">
                <span className="label-text font-bold"> Time (HH:MM:SS): </span>
              </label>
          
          <input
            type="text"
            className="input input-bordered w-full"
            value={this.state.timeInput}
            onChange={this.handleTimeInputChange} 
            
          />
       
        
      </div>
    );
  }
}

export default TimeInputForm;
