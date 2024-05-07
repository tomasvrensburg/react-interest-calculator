import React from "react";
import interest from "../images/interest.png";
import Accordion from 'react-bootstrap/Accordion';
import { BsCheck2 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Interest({ handleAddInterest }) {
    // Add interest
    const handleInterestSubmit = () => {
        handleAddInterest();
    };

    // Alert if user does not add interest
    const handleDeclineInterest = () => {
        alert("You did not add your interest.");
    }

    return (
        // Accordion button for adding interest
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <img src={interest} className="accordion--image" alt="Interest" />
                    <h2 className="button__h2--action">Add interest</h2>
                    <p className="p--description">Add your interest. The current interest rate is 7%</p>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="inputField differentInput">
                        {/* Pop-up confirmation box */}
                        <p>Do you want to add your interest?</p>
                        {/* Accept */}
                        <button className="submitButton" onClick={handleInterestSubmit}>
                            <BsCheck2 />
                        </button>
                        {/* Decline */}
                        <button className="declineButton" onClick={handleDeclineInterest}>
                            <IoMdClose />
                        </button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Interest;