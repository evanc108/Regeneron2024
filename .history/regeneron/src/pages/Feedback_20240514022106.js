import React, { useState } from 'react';
import '../styles/feedback.css';
import { handleExtraction } from '../openAIServices';
import { PropagateLoader } from 'react-spinners';

function Feedback() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [burden, setBurden] = useState({});
    const [pdfUrl, setPdfUrl] = useState("");

    const handleFileUpload = async (text) => {
        setLoading(true);
        // Uncomment and use when API is connected
        // const response = await handleExtraction(text);
        // setBurden(response);
        setFileUploaded(true);
        setLoading(false);
    };

    function extractText(event) {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPdfUrl(url);
            setFileUploaded(true);

            const reader = new FileReader();
            reader.onload = async (e) => {
                const text = await reader.result;
                console.log(text);
                handleFileUpload(text);
            };
            reader.readAsText(file);
        }
    }

    return (
        <div className="feedback-container">
            {!fileUploaded && (
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"30px"}}>
                    <div className="onboarding">
                        <h1>Protocol Burden Scoring</h1>
                    </div>
                    <div className='upload-file'>
                        {!fileUploaded && !loading && (
                            <div>
                                <h1>Upload your Protocol:</h1>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={extractText}
                                />
                            </div>
                        )}
                        {loading && (
                            <div style={{ marginTop: "30px" }}>
                                <h2>Calculating Burden...</h2>
                                <PropagateLoader color="#36d7b7" />
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {fileUploaded && !loading && (
                <div className="protocol-container">
                    <div className="iframe-container"> 
                        <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }}></iframe>
                    </div>
                </div>
            )}
            {fileUploaded && !loading && (
                <div className="score-container">
                    <div>
                        <p style={{ fontSize: '17px', fontWeight: '300', marginBottom: '-3px' }}>Burden Score</p>
                        <span style={{ fontSize: '50px', fontWeight: '600' }}>{burden.score || 'N/A'}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Feedback;
