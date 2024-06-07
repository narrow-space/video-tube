import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "./Utils/fetchFromApi";
import { useParams } from "react-router-dom";
const Feed = () => {
  const {searchTerm}=useParams()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Search result for :<span style={{ color: "#FC1503" }}>{searchTerm} Videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
