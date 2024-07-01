import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function MenuGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Seleccione el Indicador</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="uf" control={<Radio />} label="UF" />
        <FormControlLabel value="dolar" control={<Radio />} label="DOLAR" />
        <FormControlLabel value="utm" control={<Radio />} label="UTM" />
      </RadioGroup>
    </FormControl>
  );
}
