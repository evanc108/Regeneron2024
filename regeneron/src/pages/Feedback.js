import React, { useState } from 'react';
import '../styles/feedback.css';
import { handleExtraction } from '../openAIServices';
import { PropagateLoader } from 'react-spinners';
import Upload from "../img/upload.png";
import pdfToText from 'react-pdftotext';
import { calculateTotalBurden } from '../openAIServices';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function Feedback() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [burden, setBurden] = useState({});
    const [pdfUrl, setPdfUrl] = useState("");
    const [scores, setScores] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryScores, setCategoryScores] = useState({});


    const handleFileUpload = async (text) => {
        setLoading(true);
        // Uncomment and use when API is connected
        const response = await handleExtraction(text);
        setScores(response);
        setBurden(calculateTotalBurden(response).totalBurden);
        setCategoryScores(calculateTotalBurden(response).categoryScores);
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
                <div className="score-container" style={{ maxHeight: "700px", overflowY: "auto" }}>
                    <div>
                        <p style={{ fontSize: '17px', fontWeight: '300', marginBottom: '-1px' }}>Burden Score</p>
                        <span style={{ fontSize: '50px', fontWeight: '600' }}>{burden || 'N/A'}</span>
                        <div className="scores-breakdown">
                            {Object.keys(scores).map((category) => (
                                <div key={category} style={{width:"100%", textAlign:"left", cursor:"pointer"}} onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}>
                                    <h3>{category} {selectedCategory === category ? <FaChevronDown style={{float: "right"}} /> : <FaChevronRight style={{float: "right"}} />}</h3>
                                    {selectedCategory === category && (
                                        <div>
                                            {Object.keys(scores[category]).map((dataPoint, index) => (
                                                <p key={dataPoint}>{`${dataPoint}: ${scores[category][dataPoint]}`}</p>
                                            ))}
                                        </div>
                                    )}
                                    <hr style={{border: "1px solid #ccc"}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Feedback;
