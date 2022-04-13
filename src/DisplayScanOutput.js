import React from "react";

function DisplayScanOutput({ scanOutput }) {
    console.log(scanOutput);
    return (
        <div>
            Hellllooooo
            <pre>
                {JSON.stringify(scanOutput, null, 2)}
            </pre>
        </div>
    );
}

export default DisplayScanOutput;