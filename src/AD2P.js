import FileUpload from "./FileUpload.js";

function AD2P() {
    return(
    <div className='AD2P'>
        <body className='Intro'>
            AD-2P scans C and C++ files for potential vulnerabilities tied to the 2038 problem.
            Please upload a file to scan.
       </body>
       <FileUpload />
    </div>
    );
}

export default AD2P;