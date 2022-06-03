import express from 'express';
import cors from 'cors';
import lyricsFinder from "lyrics-finder";
import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const PORT = 3001;

app.post("/login",async (req,res)=>{
    const {code} = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REACT_APP_REDIRECT_URI,
        clientId: process.env.REACT_APP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CLIENT_SECRET
    });
});
