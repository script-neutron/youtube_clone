import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { ChannelCard } from "./";
import { fetchChannelApi } from "../utils/fetchFromAPI";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  useEffect(() => {
    fetchChannelApi(`channel?part=id,snippet`, id).then(({ data }) => {
      setChannelDetail(data);
    });
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background: "linear-gradient(to right, #fc466b, #3f5efb)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{ mr: { sm: "100px" } }} />

        <Stack
          direction={"row"}
          flexWrap="wrap"
          justifyContent={"start"}
          gap={2}>
          {channelDetail?.contents.map((item, idx) => {
            const video = item.video;
            return (
              <Card
                key={idx}
                sx={{
                  width: { md: "310px", xs: "100%" },
                  boxShadow: "none",
                  borderRadius: "0",
                }}>
                <Link
                  to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
                  <CardMedia
                    className=" object-cover"
                    image={video.thumbnails[3].url || demoThumbnailUrl}
                    alt={video.title}
                    sx={{ Width: 358, height: 180 }}
                  />
                  <CardContent
                    sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      color="#fff">
                      {video.title?.slice(0, 60) ||
                        demoVideoTitle?.slice(0, 60)}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="gray">
                      {channelDetail?.title?.slice(0, 60) ||
                        demoChannelTitle?.slice(0, 60)}
                      <CheckCircle
                        sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                      />
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
