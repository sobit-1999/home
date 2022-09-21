import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import latest1 from "../../img/latest-news1.png";
import latest2 from "../../img/latest-news2.png";
import latest3 from "../../img/latest-news3.svg";

export default function LatestNews() {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingY: 4,
      }}
    >
      <Typography
        gutterBottom
        variant="h2"
        sx={{ fontSize: "26px", fontWeight: "500" }}
        component="div"
      >
        Последние новости
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridGap: "2%",
          paddingY: 2
        }}
      >
        {latestNews.map((item, i) => {
          return (
            <Card
              sx={{
                background: "#fff",
                boxShadow: "none",
                ":hover": {
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={item.img}
                alt="green iguana"
                sx={{ borderRadius: 2, transform: "scale(0.85)" }}
              />
              <CardContent
                sx={{
                  fontSize: "12px",
                  padding: "0 30px",
                  textAlign: "left",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontSize: "16px", fontWeight: "500" }}
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "rgba(0, 0, 60, 0.5)",
                  }}
                  gutterBottom
                  variant="a"
                  component="div"
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>

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
        Все новости
      </Button>
    </Box>
  );
}

const latestNews = [
  {
    img: latest1,
    name: "Что происходило на рынке квартир Гродно в октябре",
    text: "19 ноя 2021",
  },
  {
    img: latest2,
    name: "Рекорды и итоги октября на рынке квартир",
    text: "16 ноя 2021",
  },
  {
    img: latest3,
    name: "Обзор рынка квартир в Гродно за Сентябрь 2021 года",
    text: "12 ноя 2021",
  },
];
