import express from "express"
import axios from "axios"

const port = 3000;
const app = express();
const API_Url = "https://api.adviceslip.com/advice";
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_Url);
        res.render("index.ejs", { content: JSON.stringify(response.data.slip.advice) });
        
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.render("index.ejs", {content: JSON.stringify(error.response.message)})
    }
})





app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
})