import fetch from 'node-fetch';

const TRANSLATION_KEY = process.env.TRANSLATE_API_KEY;
const TRANSLATION_API = 'https://api.cognitive.microsofttranslator.com/translate';

exports.handler = function(event, context, callback) {
    if (event.httpMethod !== "POST") return callback(null, { statusCode: 500, body: 'Use POST please' });

    const toLang = event.queryStringParameters.to;
    
    if(typeof(toLang) !== 'string' || toLang.length < 2) return callback(null, { statusCode: 500, body: 'Target language not valid' });
    if(typeof(event.body) !== 'string' || event.body.length < 1) return callback(null, { statusCode: 500, body: 'No input provided' });

    const texts = JSON.parse(event.body);
    if(!(texts instanceof Array)) return callback(null, { statusCode: 500, body: 'Pls provide array of string' });

    fetch(`${TRANSLATION_API}?api-version=3.0&from=en&to=${toLang}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': TRANSLATION_KEY
        },
        body: JSON.stringify(texts.map(text => ({text})))
    })
    .then(res => res.json())
    .then(json => new Promise((resolve) => {
        resolve(json.map(obj => obj.translations[0].text));
    }))
    .then(translated => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(
                translated
            )
        });
    })
    .catch(err => callback(null, {statusCode: 500, body: "Internal server error"}));
};