import { useState } from "react";

function useValidateInput(initialValue = "") {
    const [value, setValue] = useState(initialValue);

    function onChange(e) {
        setValue(e.target.value);
    }

    function validateInput() {
        return /\d/.test(value);  
    }

    function validateColor() {
        return validateInput() ? "text-danger" : "";
    }

    return {
        value,
        onChange,
        validateInput,
        validateColor
    };
}

export default useValidateInput;
