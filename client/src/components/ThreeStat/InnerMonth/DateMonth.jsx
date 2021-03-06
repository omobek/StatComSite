import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateMonth() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          // format="ММ/дд/гггг"
          margin="normal"
          id="date-picker-inline"
          label="Выберите дату"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        {/*<KeyboardDatePicker*/}
        {/*  margin="normal"*/}
        {/*  id="date-picker-dialog"*/}
        {/*  label="Date picker dialog"*/}
        {/*  format="MM/dd/yyyy"*/}
        {/*  value={selectedDate}*/}
        {/*  onChange={handleDateChange}*/}
        {/*  KeyboardButtonProps={{*/}
        {/*    'aria-label': 'change date',*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<KeyboardTimePicker*/}
        {/*  margin="normal"*/}
        {/*  id="time-picker"*/}
        {/*  label="Time picker"*/}
        {/*  value={selectedDate}*/}
        {/*  onChange={handleDateChange}*/}
        {/*  KeyboardButtonProps={{*/}
        {/*    'aria-label': 'change time',*/}
        {/*  }}*/}
        {/*/>*/}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
