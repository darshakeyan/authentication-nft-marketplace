import { useState } from "react";
import { signupFields } from "../../../mock/Fields";
import Input from "../../Input";
import FormAction from "../FormAction";
import FormService from "../FormService";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Form = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  //Handle Login API Integration here
  const authenticateUser = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };
  return (
    <>
      <form className="space-y-6">
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleSubmit} text="Sign Up" />
      </form>
      <FormService text="Sign Up" />
    </>
  );
};

export default Form;
