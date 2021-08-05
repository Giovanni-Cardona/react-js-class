import React from 'react';

function MainCopy(props)
{
    return (
        <div>
            <h2>Stock Data for Today</h2>
            <ul>
                <li>Microsoft: {props.msValue}</li>
                <li>Twitter: {props.twValue}</li>
                <li>Amazon: {props.awsValue}</li>
            </ul>
        </div>
    )
}
export default MainCopy
