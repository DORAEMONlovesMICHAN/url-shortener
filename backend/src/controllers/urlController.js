import Url from "../models/Url.js";
import generateShortId from "../utils/generateShortId.js";

export const createShortUrl = async (req,res) => {
    try {
        
        const {originalUrl} = req.body;
        
        if(!originalUrl) return res.status(400).json({ error: "URL required"});


        const shortId = generateShortId();
        const newUrl = await Url.create({ originalUrl,shortId });
        res.json({
            shortUrl: `${process.env.BASE_URL}/${shortId}`
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
};

export const redirectUrl = async (req,res) => {
    try {
        const { shortId } = req.params;
        const url = await Url.findOne({ shortId });
        if (!url) return res.status(404).send("URL not found");
        url.clicks++;
        url.lastAccessed = new Date();
        await url.save();
        res.json({originalUrl : url.originalUrl});
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }   
};

export const getUrlAnalytics = async function name(req,res) {
    try {
        const { shortId } = req.params;
        const url = await Url.findOne({ shortId });
        if(!url) return res.status(404).json({error : "URL not found "});

        res.json({
                originalUrl: url.originalUrl,
                totalClicks: url.clicks,
                createdAt: url.createdAt,
                lastAccessed: url.lastAccessed || "No access yet"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }  
};

export const getOriginalUrl = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) return res.status(404).json({ error: "URL not found" });

    res.json({ originalUrl: url.originalUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
