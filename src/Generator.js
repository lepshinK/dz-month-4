import * as React from 'react';
import { useState } from 'react';

export default function Generator() {
    const [color1, setColor1] = useState('#FF0000'); // Red
    const [color2, setColor2] = useState('#0000FF'); // Blue

    const switchColors = () => {
        // Switch the colors of the two squares
        setColor1(color2);
        setColor2(color1);
    };

    return (
        <div>
            <div style={{ backgroundColor: color1, width: '200px', height: '200px' }}></div>
            <div style={{ backgroundColor: color2, width: '200px', height: '200px' }}></div>
            <button onClick={switchColors}>Switch Colors</button>
        </div>
    );
}