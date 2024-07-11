import { TextField } from "@mui/material";
import { ReactNode } from "react";
import { useController, useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

type TextInputProps = {
  mask?: string;
  name: string;
  placeholder?: string;
  label?: string;
};

const TextInput = function({ mask = "", name = "", placeholder = "", label = "" }: TextInputProps) {
  const { control } = useFormContext();
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <InputMask mask={mask} name={name} id={name} value={field.value} onChange={field.onChange}>
      {/* @ts-expect-error the InputMask component is not typed */}
      {() => (
        <TextField
          placeholder={placeholder}
          label={label}
          name={name}
          fullWidth
          margin="normal"
        />
      ) as ReactNode}
    </InputMask>
  );
};

export default TextInput;
