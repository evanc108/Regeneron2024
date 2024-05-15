import axios from 'axios'
// import text from './protocol_folder/protocol.txt'

const extraction_prompt = `Go through the text and identify steps in a procedure. Using your best judgment, categorize every step in the protocol into the following categories: Medication, Lab and Blood, Routine Examination, Noninvasive, Invasive, Radiography and Imaging, Questionnaire, Additional

print a json file in this format (except you actually do all 8 categories):

{
    "Medication": {
        "Summary of step": "actual quote describing the procedure from the protocol",
        "Summary of step": "actual quote describing the procedure from the protocol",
    },
    "Lab and Blood": {
        "Summary of step": "actual quote describing the procedure from the protocol",
        "Summary of step": "actual quote describing the procedure from the protocol",
    }
}`;

export const handleExtraction = async (protocol) => {
    const newMessage = { role: 'user', content: protocol };
    const prompt = { role: 'system', content: extraction_prompt };
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [prompt, newMessage],
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer`
        }

    });
    var jsonObject = JSON.parse(response.data.choices[0].message.content);
    console.log("json object", jsonObject);
    console.log(response.data.choices[0].message.content);
    return jsonObject;
}

function countCategoryEntries(data) {
    const categoryCounts = {};
    // Iterate over each category in the data object
    for (const category in data) {
        // Check if the data object has this category as its own property
        if (data.hasOwnProperty(category)) {
            // Count the number of items (keys) in each category
            categoryCounts[category] = Object.keys(data[category]).length;
        }
    }
    return categoryCounts;
}

export function calculateTotalBurden(jsonData) {
    const weights = {
        "Medication": 47,
        "Lab and Blood": 46,
        "Routine Examination": 40.9,
        "Noninvasive": 40.7,
        "Invasive": 70.2,
        "Radiography and Imaging": 47.2,
        "Questionnaire": 40.8,
        "Additional": 46.0
    };

    // First, get the counts of steps in each category
    const categoryCounts = countCategoryEntries(jsonData);

    // Now calculate the total burden and scores for each category using the weights
    let totalBurden = 0;
    const categoryScores = {};
    Object.keys(weights).forEach(category => {
        const count = categoryCounts[category];
        const weight = weights[category];
        const score = count * weight;
        totalBurden += score;
        categoryScores[category] = score;
    });

    console.log("categoryCounts: ", categoryCounts);
    console.log("categoryScores: ", categoryScores);
    console.log("total burden: ", Math.round(totalBurden));

    return {
        totalBurden: Math.round(totalBurden),
        categoryScores: categoryScores
    };
}