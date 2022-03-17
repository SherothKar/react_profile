import React, { Component, useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        }
        else {
            setFile(null);
            setError("please select valid file");
        }
    }
    return (
        <div>
            <form>
                <label>
                <input type='file' onChange={changeHandler} />
                <span>+</span>
                </label>
                <div>
                    {error && <div className='error'>{error}</div>}
                    {file && <div className='filename'>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )

}

export default UploadForm;
