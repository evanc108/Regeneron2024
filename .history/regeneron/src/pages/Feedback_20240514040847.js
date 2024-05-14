import React, { useState } from 'react';
import '../styles/feedback.css';
import { handleExtraction } from '../openAIServices';
import { PropagateLoader } from 'react-spinners';
import Upload from "../img/upload.png";
import pdfToText from 'react-pdftotext';

function Feedback() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [burden, setBurden] = useState({});
    const [pdfUrl, setPdfUrl] = useState("");

    const handleFileUpload = async (text) => {
        setLoading(true);
        // Uncomment and use when API is connected
        const response = await handleExtraction(text);
        setBurden(response);
        setFileUploaded(true);
        setLoading(false);
    };

    function extractText(event) {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setPdfUrl(url);
        setLoading(true);
        pdfToText(file)
            .then(text => {
                console.log(text); 
                handleFileUpload(text);
            })
            .catch(error => {
                console.error("Failed to extract text from pdf");
                setLoading(false);
            });
    }

    return (
        <div className="feedback-container">
            {!fileUploaded && (
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <div className="onboarding">
                        <h1 style={{fontSize:"50px", marginBottom:"60px", color:"rgb(53, 53, 53)"}}>Protocol Burden Scoring</h1>
                    </div>
                    <div className='upload-file' onClick={() => document.getElementById('file-input').click()}>
                        {!loading && (
                            <div>
                                <h1 style={{color:"rgb(78, 78, 78)", marginBottom:"30px", marginTop:"60px"}}>Upload your Protocol:</h1>
                                <input
                                    id="file-input"
                                    type="file"
                                    accept=".pdf"
                                    onChange={extractText}
                                    style={{ display: 'none' }}
                                />
                                <img src={Upload} alt="upload" width={"100px"} />
                            </div>
                        )}
                        {loading && (
                            <div style={{ marginTop: "30px" }}>
                                <h2>Calculating Burden...</h2>
                                <PropagateLoader color="#36d7b7" />
                            </div>
                        )}
                        
                    </div>
                    <p style={{textOverflow: "ellipsis", whiteSpace: "normal", width: "700px", lineHeight:"35px", color:"rgb(53, 53, 53)"}}>
                            askldjfs;k askldjfs;k askldjfs;k askldjfs;kasdlkfa;skdjfl;kasdjfasdijfk;akl sdfj lak;sdfj ;alskdf aklsd;fjk asljd ;fkajs df;lk asdfj as;jdkl fjka sdjkfl askjld;fkja dsfjdaslkj faksdfjkl; asdjkads jkl;kasjdf;lkasasdlf;kasdf aslkdfjals;kdjf lkajsd faslkd fals;dkf asldk fasl;dk fal sdf l;asd flak sdfklj asd j</p>
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
