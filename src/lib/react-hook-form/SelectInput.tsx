import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useLayoutEffect } from "react";
import { useController, useFormContext } from "react-hook-form";

type SelectInputProps = {
  name: string;
  options: { value: string; label: string }[];
  label?: string;
  shouldSetInitialValue?: boolean;
};

const SelectInput = function({ name = "", options = [], label = "", shouldSetInitialValue = true }: SelectInputProps) {
  const { control } = useFormContext();
  const { field } = useController({ name, control, defaultValue: options[0]?.value || "" });
  useLayoutEffect(() => {
    if (!shouldSetInitialValue) {
      return;
    }
    setTimeout(() => {
      field.onChange(options[0]?.value);
    }, 100);
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={field.value || options[0]?.value}
        label={label}
        onChange={field.onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
