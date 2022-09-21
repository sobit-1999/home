// sharhlar

import { Padding } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function InstagramVideos() {
  return (
    <Box
      sx={{
        textAlign: " center",
        paddingY:5
      }}
    >
      <Typography
        sx={{
          fontSize: "28px",
        }}
        gutterBottom
        variant="h2"
        component="div"
      >
        Отзывы
      </Typography>
      <Card
        sx={{
          display: "grid",
          gridTemplateColumns: "32% 32% 32%",
          boxShadow: "none",
          gridGap: "2%",
          paddingTop: 5
        }}
      >
        {vedioCard.map((item, i) => {
          return (
            <CardContent
              key={i}
            >
              <iframe
                className="video-card"
                id="video"
                width="100%"
                src={"https://www.youtube.com/embed/" + item.url}
              //  src =  {`instagram://library?AssetPath=Cc2QAmbIvH-/?igshid=MDE2OWE1N2Q=`}
                frameBorder="0"
                allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="Loading..."
              />
            </CardContent>
          );
        })}
      </Card>

      <Button
        sx={{
          background: "red",
          color: "white",
          padding: "7px 15px",
          fontSize: "12px",
          marginY: "30px",
          ":hover": {
            background: "red",
            color: "white",
          },
        }}
      >
        Все отзывы
      </Button>
    </Box>
  );
}

const vedioCard = [
  { url: "ZSQSrmJNnr0?t=4" },
  { url: "HS94IX4PaiM?t=3" },
  { url: "fxhuv9Uv7WY?t=3" },
];
// https://www.instagram.com/p/Cc2QAmbIvH-/?igshid=MDE2OWE1N2Q=