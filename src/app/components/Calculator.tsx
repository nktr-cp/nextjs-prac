'use client'
// import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [result, setResult] = useState<string>('');

    const handleClick = (value: string) => {
        if (value === '=') {
            try {
                setResult(eval(result) || '');
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === 'CE') {
            setResult(result.slice(0, -1));
        } else {
            setResult(result + value);
        }
    };

    return (
        <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
            <h1 className="text-center text-green-500 text-3xl">Simple Calculator App</h1>
            <h2 className="text-center">Powered by Next.js</h2>
            <input type="text" className="w-full p-3 mb-4 text-2xl text-right border-b border-gray-300 outline-none bg-white" value={result} readOnly />
            <div className="grid grid-cols-4 gap-2">
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('7')}>7</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('8')}>8</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('9')}>9</button>
                <button className="operator p-4 text-xl font-bold rounded bg-gray-200 text-yellow-500 hover:bg-gray-300" onClick={() => handleClick('CE')}>CE</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('4')}>4</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('5')}>5</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('6')}>6</button>
                <button className="operator p-4 text-xl font-bold rounded bg-gray-200 text-yellow-500 hover:bg-gray-300" onClick={() => handleClick('/')}>/</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('1')}>1</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('2')}>2</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('3')}>3</button>
                <button className="operator p-4 text-xl font-bold rounded bg-gray-200 text-yellow-500 hover:bg-gray-300" onClick={() => handleClick('*')}>*</button>
                <button className="wide p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('0')}>0</button>
                <button className="p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('.')}>.</button>
                <button className="wide p-4 text-xl rounded bg-gray-200 hover:bg-gray-300" onClick={() => handleClick('00')}>00</button>
                <button className="operator p-4 text-xl font-bold rounded bg-gray-200 text-yellow-500 hover:bg-gray-300" onClick={() => handleClick('-')}>-</button>
                <button className="clear wide p-4 text-xl rounded bg-yellow-500 text-white hover:bg-yellow-600" onClick={() => handleClick('C')}>C</button>
                <button className="operator p-4 text-xl font-bold rounded bg-gray-200 text-yellow-500 hover:bg-gray-300" onClick={() => handleClick('=')}>=</button>
                <button className="operator p-4 text-xl font-bold rounded bg-gray-200 text-yellow-500 hover:bg-gray-300" onClick={() => handleClick('+')}>+</button>
            </div>
        </div>
    );
};

export default Calculator;
