import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import piggyBank from "../images/piggyBank.png";
import { BsCheck2 } from "react-icons/bs";

function Deposit({ handleDeposit }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        handleDeposit(inputValue);
        setInputValue(""); // Clear input
    };

    return (
        <>
            {/* Accordion button to add deposit */}
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <img className="accordion--image" src={piggyBank} alt="Piggy Bank" />
                        <h2 className="button__h2--action">Make a deposit</h2>
                        <p className="p--description">Deposit money into your account</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Pop-up input box */}
                        <div className="inputField">
                            <input name="depositAmount" className="inputBox" type="number" onChange={handleChange} value={inputValue} />
                            {/* Submit button for amount to be added */}
                            <button className="submitButton" onClick={handleSubmit}>
                                <BsCheck2 />
                            </button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Deposit;