// sharhlar

import { Padding } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Reviews() {
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
  { url: "E9Z7IoZNXkg?list=UUHYlwwQCsd818koW38SumRQ" },
  { url: "gPghGtTiAyQ?list=UUHYlwwQCsd818koW38SumRQ&t=20" },
  { url: "XYcwxQoQK4Y?list=UUHYlwwQCsd818koW38SumRQ&t=1" },
];
