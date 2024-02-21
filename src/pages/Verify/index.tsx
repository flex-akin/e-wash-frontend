import PinInput from "react-pin-input";

const Verify = () => {
  return (
    <PinInput
      length={4}
      initialValue=""
      secret
      secretDelay={500}
      onChange={(value, index) => {}}
      type="numeric"
      inputMode="number"
      style={{ padding: "10px" }}
      inputStyle={{ borderColor: "red" }}
      inputFocusStyle={{ borderColor: "black" }}
      onComplete={(value, index) => {
        console.log(value);
      }}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
};

export default Verify;
