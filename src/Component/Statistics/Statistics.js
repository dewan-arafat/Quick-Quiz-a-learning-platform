import React, { useContext } from 'react';
import { QuizContext } from '../Root/Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useContext(QuizContext)
    console.log(data);
    return (
        <div className='mt-28 bg-gray-50 '>
            <div>
                <p className='text-center text-orange-400 text-3xl font-semibold pt-5 pb-5'>Total number of quiz for each topic</p>
            </div>
            <div className='flex justify-center w-75'>
                <ResponsiveContainer width="65%" height={500} >
                    <LineChart
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
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;