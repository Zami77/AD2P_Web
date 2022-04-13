import React, {useState} from 'react';
import axios from 'axios';
import { AD2P_BASE_URL, AD2P_SCAN_FILE } from './Constants.js'

function FileUpload() {
    const [file, setFile] = useState();

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const endpoint = AD2P_BASE_URL + AD2P_SCAN_FILE;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        axios.post(endpoint, formData, config).then((response) => {
            console.log(response.data);
        }).catch(function(error) {
            console.log("ad2p scan file error:", error);
        });
    }

    return (
        <div className='FileUpload'>
            <form onSubmit={handleSubmit}>
                <h1>AD-2P Scan File Upload</h1>
                <input type="file" onChange={handleChange} />
                <button type="submit">Scan</button>
            </form>
        </div>
    );
}

export default FileUpload