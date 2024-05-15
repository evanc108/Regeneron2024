import React from 'react';
import '../styles/feedback.css';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function Related() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    // Sample data
    const scores = {
        // Example category data structure
        "Category 1": { "Metric 1": 50, "Metric 2": 70 },
        "Category 2": { "Metric 3": 60, "Metric 4": 80 }
    };

    const burden = 85; // Example burden score

    return (
        <div className="feedback-container">
            <div className="protocol-container">
                <div className="iframe-container">
                    <iframe src="https://cdn.clinicaltrials.gov/large-docs/62/NCT01927562/Prot_001.pdf" style={{ width: '100%', height: '100%' }}></iframe>
                </div>
            </div>
            <div className="score-container" >
                <div>
                    <h1>Article Title</h1>
                    <p style={{ fontSize: '17px', fontWeight: '300', marginBottom: '-1px' }}>Burden Score</p>
                    <span style={{ fontSize: '50px', fontWeight: '600' }}>{burden || 'N/A'}</span>
                    <div className="scores-breakdown" style={{ marginTop: "10px", maxHeight: "540px", overflowY: "auto" }}>
                        {Object.keys(scores).map((category) => (
                            <div key={category} style={{ width: "100%", textAlign: "left", cursor: "pointer" }} onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}>
                                <h3>{category} {selectedCategory === category ? <FaChevronDown style={{ float: "right" }} /> : <FaChevronRight style={{ float: "right" }} />}</h3>
                                {selectedCategory === category && (
                                    <div>
                                        {Object.keys(scores[category]).map((dataPoint, index) => (
                                            <p key={dataPoint}>{`${dataPoint}: ${scores[category][dataPoint]}`}</p>
                                        ))}
                                    </div>
                                )}
                                <hr style={{ border: "1px solid #ccc" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Related;
