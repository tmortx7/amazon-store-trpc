import { FieldHookConfig, useField } from "formik";
import {
  ClassAttributes,
  DetailedHTMLProps,
  SelectHTMLAttributes,
} from "react";

type FieldProps = {
  label: string;
};

const CustomSelect = ({
  label,
  ...props
}: FieldProps &
  DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > &
  ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomSelect;
