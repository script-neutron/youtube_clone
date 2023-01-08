import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export const fetchFromApi = async (url, query) => {
  const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";
  let options = {
    method: "GET",
    params: {
      query: query,
      maxResults: 50,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const data = axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const fetchChannelApi = async (url, id) => {
  const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";
  const options = {
    method: "GET",

    params: {
      id: id,
      sort: "n",
    },
    headers: {
      "X-RapidAPI-Key": "6ab02aadf0msh65f6720e56c5623p1156a9jsn0e8a23766550",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const data = axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const fetchVideoInfoApi = async (url, id) => {
  const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";
  const options = {
    method: "GET",

    params: {
      id: id,
      part: "statistics",
      fields: "items/statistics/likeCount",
    },
    headers: {
      "X-RapidAPI-Key": "6ab02aadf0msh65f6720e56c5623p1156a9jsn0e8a23766550",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const data = axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
