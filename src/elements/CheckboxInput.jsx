import { Checkbox } from "@mui/material";

// The default of this Checkbox elements is isPrimary and isNormal

function CheckboxInput({
  href,
  placeholder,
  name,
  value,
  isEmail,
  isPassword,
  isNumber,
  onChange,
}) {
  const type = [];

  return (
    <div className="input flex gap-x-1 items-center">
      <Checkbox
        sx={{
          color: "#8000FF",
          "&.Mui-checked": {
            color: "#8000FF",
          },
        }}
      />
      <h6 className="lg:text-base">{placeholder}</h6>
    </div>
  );
}

export default CheckboxInput;
