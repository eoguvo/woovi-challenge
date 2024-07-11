import InputMask from "react-input-mask";
import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

type TextInputProps = {
  mask?: string;
  name: string;
  placeholder?: string;
  label?: string;
};

const TextInput = function({ mask = "", name = "", placeholder = "", label = "" }: TextInputProps) {
  const { control } = useFormContext();
  const { field, formState } = useController({ name, control, defaultValue: "" });
  const error = String(formState.errors[name]?.message || "");
  const hasError = Boolean(error);

  if (mask) {
    return (
      <InputMask
        mask={mask}
        name={name}
        id={name}
        value={field.value}
        onChange={field.onChange}
        maskPlaceholder={null}
      >
        {/* @ts-expect-error the types say function is bad, but on render receives "children must be a function" */}
        {() => (
          <TextField
            placeholder={placeholder}
            label={label}
            name={name}
            fullWidth
            margin="normal"
            error={hasError}
            helperText={error}
            inputProps={{ "aria-invalid": hasError }}
          />
        )}
      </InputMask>
    );
  }
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      name={name}
      fullWidth
      margin="normal"
      error={hasError}
      helperText={error}
      value={field.value}
      onChange={field.onChange}
      inputProps={{ "aria-invalid": hasError }}
    />
  );
};

export default TextInput;
