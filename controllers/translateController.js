// const translate = require('google-translate-api');
const translatte = require('translatte');


const engToFrController = async (req, res) => {
    try {
        const { text } = req.body;
        
        if (!text) {
            return res.status(400).send("Text is required");
        }

        const translation = await translatte(text, { to: 'fr' });
        
        return res.status(200).json({ translation: translation.text });

    } catch (e) {
        console.error('Translation error:', e);
        res.status(500).json({ error: 'Translation failed' });
    }
};

module.exports = {
    engToFrController
};