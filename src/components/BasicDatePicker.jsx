import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

// eslint-disable-next-line react/prop-types
export default function BasicDatePicker({ selectedDate, onDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker 
          label="Ingrese fecha UF" 
          value={selectedDate ? dayjs(selectedDate) : null}
          onChange={(newDate) => onDateChange(newDate ? newDate.format('YYYY-MM-DD') : '')}
          renderInput={(params) => <TextField {...params} />}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}