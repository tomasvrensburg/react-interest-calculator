import React, { useState } from "react";
import withdraw from "../images/withdraw.png";
import Accordion from 'react-bootstrap/Accordion';
import { BsCheck2 } from "react-icons/bs";

function Withdraw({ handleWithdrawal }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        handleWithdrawal(inputValue);
        setInputValue(""); // Clear input
    };

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <img src={withdraw} className="accordion--image" alt="Withdraw" />
                    <h2 className="button__h2--action">Make a withdrawal</h2>
                    <p className="p--description">Withdraw money from your account</p>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="inputField">
                        <input name="withdrawAmount" className="inputBox" type="number" onChange={handleChange} value={inputValue} />
                        <button className="submitButton" onClick={handleSubmit}>
                            <BsCheck2 />
                        </button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Withdraw;