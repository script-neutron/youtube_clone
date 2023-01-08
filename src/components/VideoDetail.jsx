import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchVideoInfoApi, fetchChannelApi } from "../utils/fetchFromAPI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchVideoInfoApi(`video?type=v`, id).then(({ data }) => {
      setVideoDetail(data.videoDetails);
      fetchChannelApi(`channel?type=c`, data.videoDetails.channelId).then(
        ({ data }) => {
          setChannel(data);
        }
      );
    });
    fetchChannelApi(`video/related?type=v`, id).then(({ data }) => {
      setVideos(data.contents);
      console.log(data);
    });
  }, [id]);

  if (!videoDetail) return "Loading...";

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}>
              <Link to={`/channel/${videoDetail.channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channel?.title}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
