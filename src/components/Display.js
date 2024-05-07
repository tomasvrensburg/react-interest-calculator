import southAfricanFlag from '../images/southAfricanFlag.png';
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Interest from "./Interest";
import Bankfees from "./BankFees";
import { useState } from "react";

function Display() {
    const [accountBalance, setAccountBalance] = useState(0); //Initial Balance
    const [paidBankFees, setPaidBankFees] = useState(false); //Check whether bank fees have been paid
    const [addInterest, setAddInterest] = useState(false); //Check whether interest has been added

    // Deposit
    const handleDeposit = (amount) => {
        setAccountBalance(prevBalance => prevBalance + parseFloat(amount));
    };

    // Withdrawal
    const handleWithdrawal = (amount) => {
        const newBalance = accountBalance - parseFloat(amount);
        if (newBalance < 0) {
            alert("Insufficient funds");
        } else {
            setAccountBalance(newBalance);
        }
    };

    // Interest
    const handleAddInterest = () => {
        if (!addInterest) {
            const interestAmount = accountBalance * 0.07;
            setAccountBalance(prevBalance => prevBalance + interestAmount);
            setAddInterest(true);
        }
    };

    // Bank Fees
    const handleBankFees = () => {
        if (!paidBankFees) {
            setAccountBalance(prevBalance => prevBalance - 50);
            setPaidBankFees(true);
        }
    };

    return (
        <>
            {/* Show live update of account balance */}
            <h3>Your account balance is</h3>
            <h1 id='div__h1--amount'>{accountBalance.toFixed(2)}</h1>
            <h3 id='h3--currency'>
                <img src={southAfricanFlag} id='img--flag' alt='SA Flag' />
                ZAR
            </h3>
            {/* Deposit, Withdraw, Interest and Bank Fee buttons */}
            <h4>Here are some things you can do</h4>
            <div id='buttons'>
                <Deposit handleDeposit={handleDeposit} />
                <Withdraw handleWithdrawal={handleWithdrawal} />
                <Interest handleAddInterest={handleAddInterest} />
                <Bankfees handleBankFees={handleBankFees} />
            </div>
        </>
    )
}

export default Display;