import axios from 'axios'
// import text from './protocol_folder/protocol.txt'

const extraction_prompt = "Your job is to decipher and organize this protocol into a numbered list of actions. also note whether a step falls into one of the following categories: medication, lab_and_blood, routine_procedure, non-invasive_procedure, invasive_procedure, imaging, questionnaire, other. return information in this format: 1. {Action/ Protocol Step} + Category: (Category)"

// const protocol = "cutting off hands, doing extensive surgery, taking blood samples, taking x-rays, taking a questionnaire, taking medication";

export const handleExtraction = async (protocol) => {
    const newMessage = { role: 'user', content: protocol };
    const prompt = { role: 'system', content: extraction_prompt };
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [prompt, newMessage],
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `
        }

    });
    return calculateBurdenByCategory(response.data.choices[0].message.content);
}

function countWords(string) {
    const wordsToCount = [
        'medication',
        'lab_and_blood',
        'routine_procedure',
        'non_invasive_procedure',
        'invasive_procedure',
        'imaging',
        'questionnaire',
        'other'
    ];

    let wordCounts = {};
    wordsToCount.forEach(word => {
        wordCounts[word] = 0;
    });

    const words = string.split(/\s+/);

    words.forEach(word => {
        if (wordsToCount.includes(word)) {
            wordCounts[word]++;
        }
    });

    return wordCounts;
}

const calculateBurdenByCategory = (extracted_steps) => {
    const burden_weights = {
        'medication': { 'physical': 0.8, 'financial': 0.5, 'psychological': 0.3, 'logistical': 0.4 },
        'lab_and_blood': { 'physical': 3.0, 'financial': 1.0, 'psychological': 1.5, 'logistical': 2.0 },
        'routine_procedure': { 'physical': 1.5, 'financial': 0.5, 'psychological': 1.0, 'logistical': 1.2 },
        'non_invasive_procedure': { 'physical': 1.0, 'financial': 0.3, 'psychological': 0.8, 'logistical': 1.0 },
        'invasive_procedure': { 'physical': 4.0, 'financial': 1.5, 'psychological': 2.0, 'logistical': 1.8 },
        'imaging': { 'physical': 2.0, 'financial': 1.2, 'psychological': 1.1, 'logistical': 1.5 },
        'questionnaire': { 'physical': 0, 'financial': 0.1, 'psychological': 1.5, 'logistical': 0.5 },
        'other': { 'physical': 2.0, 'financial': 1.0, 'psychological': 1.0, 'logistical': 1.0 }
    };

    const wordCounts = countWords(extracted_steps);
    const burden = {
        'physical': 0,
        'financial': 0,
        'psychological': 0,
        'logistical': 0
    };

    for (const word in wordCounts) {
        if (wordCounts.hasOwnProperty(word) && burden_weights.hasOwnProperty(word)) {
            const count = wordCounts[word];
            const weights = burden_weights[word];
            burden.physical += count * weights.physical;
            burden.financial += count * weights.financial;
            burden.psychological += count * weights.psychological;
            burden.logistical += count * weights.logistical;
        }
    }

    const categories = Object.keys(burden);
    const averageBurden = {};
    categories.forEach(category => {
        averageBurden[category] = burden[category] / Object.values(wordCounts).reduce((acc, val) => acc + val, 0);
    });
    console.log(averageBurden);
    return averageBurden;
};