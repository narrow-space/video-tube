import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  demoVideoUrl,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "./Utils/Constans";
import { Link } from "react-router-dom";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card   sx={{ maxWidth: {xs:385 },width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0, }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia  image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px', md: "320px"}, height: 180,whiteSpace: 'normal' }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px', }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography sx={{
          whiteSpace: 'normal'
        }} variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography sx={{
          whiteSpace: 'normal'
        }} variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon  sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
  );
};

export default VideoCard;
