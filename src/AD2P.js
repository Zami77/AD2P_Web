import FileUpload from "./FileUpload";
import "./AD2P.css";

function AD2P() {
    const { scanOutput, fileUploadRender } = FileUpload();

    return(
    <div className='AD2P'>
        AD-2P scans C and C++ files for potential vulnerabilities tied to the 2038 problem.
        Please upload a file to scan.
        {fileUploadRender}
        <div className="ScanOutput">
            <pre>
                {JSON.stringify(scanOutput, null, 2)}
            </pre>
        </div>
    </div>
    );
}

export default AD2P;