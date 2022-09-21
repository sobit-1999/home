import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import employee1 from "../../img/employee1.svg";
import employee2 from "../../img/employee2.svg";
import employee3 from "../../img/employee3.svg";
import employee4 from "../../img/employee4.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import imgCard from "../../img/fon.jpg";

export default function SpecialistsCarousel() {
  const specialistsCarousel = [
    {
      img: employee1,
      name: "Владимир Пыльский",
      text: "Директор",
    },
    {
      img: employee2,
      name: "Елена Пыльская",
      text: "Агент по операциямс недвижимостью",
    },
    {
      img: employee3,
      name: "Евгения Савельева",
      text: "Агент по операциям с недвижимостью",
    },
    {
      img: employee4,
      name: "Игорь Буров",
      text: "Агент по операциям с недвижимостью",
    },

    {
      img: employee2,
      name: "Aleksandr",
      text: "Агент по операциям с недвижимостью",
    },
    {
      img: employee4,
      name: "Damien",
      text: "Агент по операциям с недвижимостью",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${imgCard})`,
        marginY:5
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgb(48, 57, 73, 0.7)",
          padding: "5px 15%",
          textAlign: "center",
        }}
      >
        <h2 className="specialists-carousel-name">
          Специалисты компании «Магазин недвижимости»
        </h2>
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={6}
          naturalSlideHeight={105}
          visibleSlides={4}
          infinite={true}
          className="specialists-carousel"
        >
          <ButtonBack className="carousel-back">
            <ArrowBackIosIcon />
          </ButtonBack>
          <Slider>
            {specialistsCarousel.map((item, i) => {
              return (
                <Slide index={i + 1}>
                  <Card
                    sx={{
                      height: "100%",
                      marginX: "10%",
                      padding: "0 5px",
                      background: "#fff",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.img}
                      alt="green iguana"
                      sx={{ borderRadius: 2, transform: "scale(0.8)" }}
                    />
                    <CardContent
                      sx={{
                        fontSize: "12px",
                        padding: "0 10px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontSize: "15px" }}
                        component="div"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          // marginTop: -1
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
                </Slide>
              );
            })}
          </Slider>
          <ButtonNext className="carousel-next">
            <ArrowForwardIosIcon />
          </ButtonNext>
        </CarouselProvider>

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
          Все специалисты
        </Button>
      </Box>
    </Box>
  );
}
