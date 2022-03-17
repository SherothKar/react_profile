// import React, { Component, useEffect, useState } from 'react'
// import UploadForm from '../Components/UploadForm'
// // import { projectStorage } from '../Firebase/Config'

// const UseStorage = (file) => {

//     const [progress, setProgress] = useState(0);
//     const [error, setError] = useState(null);
//     const [url, setUrl] = useState(null);

    // useEffect(()=>{
    // useeffect syntax 32.31
    // https://dev.to/thenerdydev/10-react-projects-every-beginner-should-try-fk9
    // }),[]}

//     useEffect(() => {
//         const storageRef = projectStorage.ref(file.name);
//         storageRef.put(file).on('state_changed', (snap) => {
//             let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;//Formula
//             setProgress(percentage);
//         }, (err) => {
//             setError(err);
//         },
//             async () => {
//                 const url = await storageRef.getDownloadURL();
//                 setUrl(url);
//             }
//         )
//     }, [file]);
//     return { progress, url, error }
// }



// export default UseStorage
