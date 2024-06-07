import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
import Loader from "../loader/Loader";
import ScrollToTop from "react-scroll-to-top";

const Videos = ({ videos, channelDetail, direction, maxWidth }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((vd, index) => (
        <Box key={index}>
          {vd.id?.videoId && <VideoCard video={vd} />}
          {vd.id?.channelId && <ChannelCard channelDetail={vd} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
