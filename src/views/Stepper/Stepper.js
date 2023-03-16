import React, { useState } from 'react';
import Passport from './Passport';
import Success from './Success';
import Visa from './Visa';

export default function Stepper() {
    const [data, setData] = useState({
        step: 1,
        email: '',
        userName: '',
        password: ''
    });

    const prevStep = () => {
        const { step } = data;
        setData({ step: step - 1 });
    };

    const nextStep = () => {
        const { step } = data;
        setData({ step: step + 1 });
    };

    const handleChange = (e) => {
        setData({ [e.target.name]: e.target.value });
    };

    const { step } = data;
    const { email, userName, password } = data;

    const value = { email, userName, password };

    switch (step) {
        case 1:
            return <Passport nextStep={nextStep} handleChange={handleChange} value={value} />;
        case 2:
            return <Visa prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} value={value} />;
        case 3:
            return <Success />;
        default:
    }

    return <></>;
}
