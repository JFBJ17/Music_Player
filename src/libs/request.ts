import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const DEZEER_API = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
})
