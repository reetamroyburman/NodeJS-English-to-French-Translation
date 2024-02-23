
const { translate } = require('free-translate');


const engToFrController = async (req, res) => {
    try {
        const { text } = req.body;
        
        if (!text) {
            return res.status(400).send("Text is required");
        }

        const translation = await translate(text, { to: 'fr' });

        return res.status(200).json({ translation: translation });

    } catch (e) {
        console.error('Translation error:', e);
        res.status(500).json({ error: 'Translation failed' });
    }
};

module.exports = {
    engToFrController
};