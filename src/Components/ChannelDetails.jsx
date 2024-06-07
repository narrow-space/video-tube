import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "./Utils/fetchFromApi";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(
      `search?channelId=${id}&part=snippet&order=date`
    ).then((data) => setVideos(data?.items));
  }, [setChannelDetail, id]);
  return (
    <Box  minHeight="92vh">
      <Box>
        <div
          style={{
            backgroundImage: `url(${channelDetail?.snippet?.thumbnails?.high?.url})`,
            height: "300px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 10,
          }}
        />
        <ChannelCard marginTop="-113px" channelDetail={channelDetail} />
        <Box display="flex" justifyContent="center" p="2">
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
