import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi("search?part=snippet&type=v", searchTerm).then(({ data }) => {
      setVideos(data.contents);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for :
        <span style={{ color: "#f31503" }}> {searchTerm}</span> videos
      </Typography>
      <Box display={"flex"} p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        {videos.length > 0 && <Videos videos={videos} />}
      </Box>
    </Box>
  );
}

export default SearchFeed;
