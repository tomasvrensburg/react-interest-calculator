import React from "react";
import bankFees from "../images/bankFees.png";
import Accordion from 'react-bootstrap/Accordion';

function Bankfees({ handleBankFees }) {

    const handlePayBankFees = () => {
        handleBankFees();
    };

    return (
        // Accordion button that deducts bank fees
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <img src={bankFees} className="accordion--image" alt="Bank Fees" />
                    <h2 className="button__h2--action">Charge bank fees</h2>
                    <p className="p--description">Deduct your outstanding bank fees from your account</p>
                </Accordion.Header>
                <Accordion.Body>
                    {/* Pop-up confirmation */}
                    <div className="inputField differentInput">
                        <p>Do you want to subtract your bank fees?</p>
                        {/* Button that detucts balance */}
                        <button className="submitButton payButton" onClick={handlePayBankFees}>
                            Pay Fees
                        </button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Bankfees;