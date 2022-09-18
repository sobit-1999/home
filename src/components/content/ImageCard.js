import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImgHome from "../../img/home-img.svg";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import './content.css'

export default function ImageCard() {
  return (
    <>
      <ImageListItem
        sx={{
          width: "100%",
          background: "blue",
        }}
      >
        <img
          src={ImgHome}
          // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt="img"
          loading="lazy"
        />
        <ImageListItemBar
          sx={{
            paddingX: "13%",
            height: "100%",
            fontWeight: '300'
          }}
          title={
            <Box sx={{ fontSize: '27px',
          }}
            >
              <h1 className="home-img-name">
                Поможем купить <br/><br/>
                Вашу недвижимость
              </h1>
              <p className="img-card-text">быстро, выгодно, безопасно</p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: '17px'
                }}
              >
                <Button
                  sx={{
                    background: "red",
                    color: "white",
                    padding: "7px 15px",
                    fontSize: "12px",
                    ":hover": {
                      background: "red",
                      color: "white",
                    },
                  }}
                >
                  Консультация
                </Button>
                <p className="ili">или</p>
                <a href="#">Бесплатная оценка</a>
              </Box>
            </Box>
          }
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about hello3`}
            >
             </IconButton>
          }
        />
      </ImageListItem>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
