import { useState } from "react";

export default function Email() {
    const [valid, setValid] = useState(true);
    const [ack, setAck] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        let emailValidity = validateEmail(email);
        setValid(emailValidity);
        if(emailValidity) {
            setAck(true);

        }
    };

    const onChange = (e) => {
        if(!valid) {
            setValid(Boolean(e.target.value));
        }
        if(ack) {
            setAck(false);
        }
    }

    return (
        <div style={{
            marginBottom: '120px'
        }}>
            <form
                style={{
                    width: "100%",
                    height: '60px'
                }}
                onSubmit={onSubmit}
            >
                <div className="form">
                    <input
                        placeholder={"Your Email Address.."}
                        className={`form-input ${valid ? '' : 'input-error'}`}
                        onChange={onChange}
                    />
                    <button className={`form-button ${valid ? '' : 'input-error'}`}>
                        Notify Me
                    </button>
                </div>
                {
                    !valid ? (
                        <p className="error">
                            Please provide a valid email address
                        </p>
                    ) : null
                }
                {
                    ack ? (
                        <p className="ack">
                            You will be notified 👍
                        </p>
                    ) : null
                }
            </form>
        </div>
    );
}
