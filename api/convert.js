const { pinyin } = require('pinyin-pro');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { text } = req.body;
    if (!text) {
      return res.status(400).send({ error: 'Text is required' });
    }

    try {
      const result = pinyin(text, { toneType: 'mark' });
      res.send({ pinyin: result });
    } catch (error) {
      res.status(500).send({ error: 'Error converting text to Pinyin' });
    }
  } else {
    res.status(405).send({ error: 'Method Not Allowed' });
  }
};
