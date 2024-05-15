import React from 'react';
import '../styles/feedback.css';
import { FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Example1() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const navigate = useNavigate();

    const handleBackwardClick = () => {
        navigate('/18234709327134');
    };

    const handleForwardClick = () => {
        navigate('/18234709827134');
    };

    // Updated data structure with your provided data
    const data = {
        "title": "Medication Adherence Clinical Decision Support (ADH-Wizard)",
        "protocolLink": "https://cdn.clinicaltrials.gov/large-docs/20/NCT03748420/Prot_SAP_000.pdf",
        "dropout": "Dropout Rate: 9%",
        "burden": 570,
        "categories": {"Noninvasive": {
            "EHR data is exchanged with Wizard web service in the background at the patient’s first and subsequent primary care encounters occurring during the study duration. An encounter-based limited data set is collected and stored in a data repository (intervention & control)": "X X X X X",
            "All eligible patients are randomly assigned a study identification (ID) the first time they are eligible for CDS at a study clinic": "X",
            "Based on the study ID, an eligible patient is then randomly assigned to adherence intervention or control": "X",
            "After Wizard determines study eligibility and CDS recommendations, it prompts CDS tools to be printed for the intervention-assigned patient and their provider through a Best Practice Advisory (BPA) for rooming staff at each primary care encounter during the study period": "X X X X",
            "The eligible intervention-assigned patient has an attempted exposure to Adherence CDS at each primary care encounter during the study period": "X X X X",
            "Wizard algorithms are run outside of encounters on all study eligible patients at set intervals (6, 12, and 18 months) for analysis purposes. A limited data set is collected and stored in a data repository (intervention & control patients)": "X X X",
            "An eligible intervention-assigned patient is added to a pharmacist outreach intervention registry if study criteria are still met (not at goal and not adherent)": "X",
            "An eligible intervention-assigned patient is assigned to a pharmacist": "X",
            "Pharmacist calls eligible patient (multiple attempts) for adherence assessment and action plan": "X",
            "Pharmacist follow-up per action plan": "X X",
            "Experience and satisfaction surveys sent to a random group of patients (intervention & control)": "X X"
        },
        "Invasive": {},
        "Routine Examination": {},
        "Questionnaire": {
            "Survey assessed patient reported adherence": "X",
            "Patient and provider experience and satisfaction": "X",
            "Qualitative analysis of CDS user experience": ""
        },
        "Medication": {},
        "Lab and Blood": {},
        "Radiography and Imaging": {},
        "Additional": {}}
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
                </div>
            </div>
        </div>
    );
}

export default Example1;
