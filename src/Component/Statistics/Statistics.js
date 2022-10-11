import React, { useContext } from 'react';
import { QuizContext } from '../Root/Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useContext(QuizContext)
    console.log(data);
    return (
        <div className='mt-10 bg-gray-200'>
            <div>
                <p className='text-center text-orange-400 text-3xl font-semibold pb-5'>Total number of quiz for each topic</p>
            </div>
            <div className='flex justify-center'>
                <LineChart width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;