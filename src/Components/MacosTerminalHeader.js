import React from 'react';
import '../Css/MacosTerminalHeader.css';

const MacosTerminalHeader = () => {
    return (
        <div className="headerbody">
            <div className="button close"></div>
            <div className="button minimize"></div>
            <div className="button maximize"></div>
        </div>
    );
}

export default MacosTerminalHeader;