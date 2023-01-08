import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}>
          <CardMedia
            image={
              channelDetail?.avatar?.thumbnails[0]?.url || demoProfilePicture
            }
            alt={channelDetail?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.title}{" "}
            {channelDetail?.verified ? (
              <CheckCircleIcon
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            ) : (
              <></>
            )}
          </Typography>
          {channelDetail?.subscriberCountText && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
              {(channelDetail?.subscriberCountText).toLocaleString("en-US")}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
