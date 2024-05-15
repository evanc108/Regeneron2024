import React from 'react';
import '../styles/feedback.css';
import { FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Example1() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const navigate = useNavigate();

    const handleBackwardClick = () => {
        navigate('/');
    };

    const handleForwardClick = () => {
        navigate('/18234709327134');
    };

    // Updated data structure with your provided data
    const data = {
        "title": "Digital Self-Management and Health Coaching for Type 2 Diabetes - Impact on Diabetes clinical and wellness indicators",
        "protocolLink": "https://cdn.clinicaltrials.gov/large-docs/48/NCT04057248/Prot_SAP_000.pdf",
        "burden": 398,
        "dropout": "Dropout Rate: 14%",
        "categories": {
            "Medication": {},
            "Lab and Blood": {
                "Study Specimen:": "Lab test Venous blood - Blood glucose level and HbA1C Self-test Capillary whole blood - Blood glucose level",
                "Data to be Collected:": "Venous blood test: HbA1C, Lipid profile, HCT results"
            },
            "Routine Examination": {},
            "Noninvasive": {
                "Study Category": "This clinical study is exempt from most provisions of the IDE regulation because it fits the category provided in 21 CFR 812.2(c)(3)"
            },
            "Invasive": {},
            "Radiography and Imaging": {},
            "Questionnaire": {
                "Study Procedures:": "Each subject enrolled in the study will be requested to complete an intake questionnaire including diabetes quality of life questions",
                "Study Flow": "During the first session, the Diabetes health coach will complete an intake session which includes aspects in Diabetes quality of life. The questions express the satisfaction of the patient with managing and controlling diabetes. The items were added according to specific quality of life module"
            },
            "Additional": {
                "Product to be Evaluated": "Dario Blood Glucose Monitoring System (BGMS) and connected cloud platform",
                "Study Objectives:": "To evaluate the impact of the Dario digital self-monitoring platform provided with diabetes management coaching on: Individual’s Quality of Life for Clinical parameters (HbA1C, weight, lipids profile, etc.) For people with Type 2 Diabetes at end of study vs. baseline.",
                "Inclusion/Exclusion Criteria": "List of criteria for inclusion and exclusion in the study",
                "Adverse Events": "List of definitions for adverse events and reporting requirements"
            }
        }
    };

    return (
        <div className="feedback-container">
            <div className="protocol-container">
                <div className="iframe-container">
                    <iframe src={data.protocolLink} style={{ width: '100%', height: '100%' }}></iframe>
                </div>
            </div>
            <div className="related-score-container">
                <div>
                    <h3>{data.title}</h3>
                    <h5>{data.dropout}</h5>
                    <p style={{ fontSize: '17px', fontWeight: '300', marginBottom: '-1px' }}>Burden Score</p>
                    <span style={{ fontSize: '50px', fontWeight: '600' }}>{data.burden || 'N/A'}</span>
                    <div className="scores-breakdown" style={{ marginTop: "10px", maxHeight: "540px", overflowY: "auto" }}>
                        {Object.keys(data.categories).map((category) => (
                            <div key={category} style={{ width: "100%", textAlign: "left", cursor: "pointer" }} onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}>
                                <h3>{category} {selectedCategory === category ? <FaChevronDown style={{ float: "right" }} /> : <FaChevronRight style={{ float: "right" }} />}</h3>
                                {selectedCategory === category && (
                                    <div>
                                        {Object.entries(data.categories[category]).map(([key, value]) => (
                                            <p key={key}>{`${key}: ${value}`}</p>
                                        ))}
                                    </div>
                                )}
                                <hr style={{ border: "1px solid #ccc" }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ bottom: '0', left: '0', right: '0', marginTop: '40px', backgroundColor: 'white' }}>
                    <FaChevronLeft onClick={handleBackwardClick} style={{ marginRight: '40px', fontSize: '30px' }} />
                    <FaChevronRight onClick={handleForwardClick} style={{ marginLeft: '40px', fontSize: '30px' }} />
                </div>
            </div>
        </div>
    );
}

export default Example1;
