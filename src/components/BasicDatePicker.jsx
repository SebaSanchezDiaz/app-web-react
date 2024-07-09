import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export default function BasicDatePicker(selectedDate,onDateChange) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker 
          label="Ingrese fecha UF" 
          selected={selectedDate}
          input type="date" 
          value={selectedDate} onChange={onDateChange}
          />
      </DemoContainer>
    </LocalizationProvider>
  );
}
