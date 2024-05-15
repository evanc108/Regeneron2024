import React from 'react';
import '../styles/feedback.css';
import { FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Example1() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const navigate = useNavigate();

    const handleBackwardClick = () => {
        navigate('/18234709827134');
    };

    const handleForwardClick = () => {
        navigate('/18234789327134');
    };

    // Updated data structure with your provided data
    const data = {
        "title": "Insulin Pump to Multiple Daily Injection Transition Clinical Trial (TRANSITION)",
        "protocolLink": "https://cdn.clinicaltrials.gov/large-docs/91/NCT03987191/Prot_SAP_000.pdf",
        "dropout": "Dropout Rate: 6%",
        "burden": 472,
        "categories": {"Medication": {
            "Administer insulin degludec U-100 and insulin aspart U-100 depending on calculated insulin requirement during randomization phase.": "Second, blinded CGM (Dexcom G6) will be inserted.",
            "Subjects will receive 1 pen of insulin degludec U-100 and 1-2 pen of insulin aspart U-100 depending on calculated insulin requirement during randomization phase.": "Randomization process can start.",
            "Insulin degludec dose conversion guidance will be provided based on patient's average basal insulin for the last 3 days.": "Subjects will be randomized equally into one of the two possible treatment arms."
        },
        "Lab and Blood": {
            "Point of care HbA1c and spot urine pregnancy test for women in reproductive age group will be done at the time of screening.": "All subjects will undergo review of inclusion and exclusion criteria.",
            "A non-fasting blood will be drawn for complete metabolic panel (CMP) at the time of screening.": "For laboratory results such as CMP, 'results pending' will be selected at Visit 1, week 0."
        },
        "Routine Examination": {
            "Vital signs, BMI, and physical examination will be conducted at each visit.": "Blood glucose meter download and review of self-monitoring of blood glucose (SMBG) will be done at each visit."
        },
        "Noninvasive": {
            "Blinded CGM insertion/training will be provided at screening visit.": "Before screening takes place, subjects will be provided with written information about the trial and the procedures involved."
        },
        "Invasive": {
            "Blood draw for POC A1c and urine pregnancy test will be conducted at screening.": "A non-fasting blood will be drawn for complete metabolic panel (CMP) at the time of screening."
        },
        "Radiography and Imaging": {},
        "Questionnaire": {
            "Patients will undergo the GOLD questionnaire to exclude hypoglycemia unawareness.": "Primary and secondary endpoints will be analyzed from 1-week of blinded CGM use during randomization phase."
        },
        "Additional": {
            "Subjects will be trained on function modalities of the blinded CGM.": "Dexcom G6 will be inserted either on abdomen or upper arm depending on patient's preference."
        }}
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
