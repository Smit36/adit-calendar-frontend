import React, { Component } from "react";
import {
  Button,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,  
  KeyboardDatePicker
} from "@material-ui/pickers";
import "./NewEvent.css";

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ""
    };
  }
  handleDateChange = () => {
    let dateChange = Date;
    this.setState({ selectedValue: dateChange });
  };
  render() {
    return (
      <div className="NewEvent">
        <Card>
          <CardContent>
            <div className="EventHeader">
              <Typography variant="h4">New Event</Typography>
            </div>
            <div className="EventContent">
              <div className="EventName">
                <Typography variant="h6">Event Name</Typography>
                <TextField
                  label="Event Name"
                  placeholder="eg. Workshop on Java "
                  fullWidth={true}
                  name="eventName"
                  margin="dense"
                  variant="outlined"
                  required
                />
              </div>
              <div className="EventDate">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="EventTime">
                <Typography variant="h6">Select Time</Typography>
                <RadioGroup>
                  <FormControlLabel
                    value="first"
                    control={<Radio color="primary" />}
                    label="9 am to 1 pm"
                  />
                  <FormControlLabel
                    value="second"
                    control={<Radio color="primary" />}
                    label="2pm to 5pm"
                  />
                  <FormControlLabel
                    value="full"
                    control={<Radio color="primary" />}
                    label="Full Day"
                  />
                </RadioGroup>
              </div>

              <div className="Description">
                <Typography variant="h6">Description</Typography>
                <TextField
                  label="Details of Event"
                  placeholder="eg."
                  multiline
                  fullWidth={true}
                  name="description"
                  margin="dense"
                  variant="outlined"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default NewEvent;
