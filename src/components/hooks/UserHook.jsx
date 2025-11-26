import Button from "../Button/Button";
import useValidateInput from "./useValidateInput";

function User() {
    const firstName = useValidateInput("");
    const lastName = useValidateInput("");

    return (
        <div className="p-4">
            <h1 className="capital-case">Register</h1>

            <form className="d-flex gap-4 p-4 border">
                
                <input
                    type="text"
                    placeholder="firstname...."
                    className={`form-control mb-3 ${firstName.validateColor()}`}
                    onChange={firstName.onChange}
                />

                <input
                    type="text"
                    placeholder="lastname...."
                    className={`form-control mb-3 ${lastName.validateColor()}`}
                    onChange={lastName.onChange}
                />
                <Button >
                    Submit
                </Button>
                <Button > Send</Button>
            </form>
        </div>
    );
}

export default User;
