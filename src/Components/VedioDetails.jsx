import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromApi } from "./Utils/fetchFromApi";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Loader from "../loader/Loader";


const VedioDetails = () => {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  console.log(channelDetail);
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideo(data?.items[0]);
    });
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => {
      setVideos(data?.items);
    });
  fetchFromApi(
      `channels?part=snippet&id=${video?.snippet?.channelId}`
    ).then((data) => setChannelDetail(data?.items[0]));

  }, [id,video?.snippet?.channelId]);

  // useEffect(() => {
  //   fetchFromApi(
  //     `channels?part=snippet&id=${video?.snippet?.channelId}`
  //   ).then((data) => setChannelDetail(data?.items[0]));
  // }, [video?.snippet?.channelId]);

  if (!channelDetail?.snippet&&!video?.snippet) {
    return <Loader />;
  }
  // const {
  //   snippet: {
  //     title,
  //     channelId,
  //     channelTitle,
  //     thumbnails: {
  //       high: { Url },
  //     },
  //   },

  //   statistics: { viewCount, likeCount },
  // } = video;

  return (
    <Box
     minHeight="92vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} py={6}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
            
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography varient="h5" color="#fff" fontWeight="bold" p={2}>
              {video?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#ff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row">
                    <Avatar
                      sx={{
                        height: "60px",
                        width: "60px",
                      }}
                    >
                      <img
                        style={{
                          height: "70px",
                          width: "auto",
                        }}
                        src={channelDetail?.snippet?.thumbnails?.high?.url}
                        alt=""
                      />
                    </Avatar>
                  </Stack>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                    sx={{
                      ml:"10px"
                    }}
                  >
                    {video?.snippet?.channelTitle}
                  </Typography>

                  <CheckCircleIcon
                    sx={{ fontSize: "20px", color: "gray", ml: "4px" }}
                  />
                  
                </Box>
              </Link>
              <Stack direction="row" gap="10px"  display="flex" justifyContent="end" alignItems="center" >
           <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
                color:"#fff"
              }}
            >
              {parseInt(video?.statistics?.viewCount).toLocaleString()}views
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
                color:"#fff"
              }}
            >
              {parseInt(video?.statistics?.likeCount).toLocaleString()}likes
            </Typography>
           </Stack>
            </Stack>
           
          </Box>
        </Box>
        <Box  px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
     { !videos?.length?<Loader/>: <><Videos  videos={videos} direction="column"/></>}
      </Box>
      </Stack>
    
    </Box>
  );
};

export default VedioDetails;
