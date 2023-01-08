import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";

function VideoCard({ video }) {
  console.log(video);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}>
      <Link
        to={video.videoId ? `/video/${video.videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={video?.thumbnails[0]?.url || demoThumbnailUrl}
          alt={video?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video?.channelId ? `/channel/${video?.channelId}` : demoChannelUrl
          }>
          <Typography variant="subtitle2" color="gray">
            {video?.channelName || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
