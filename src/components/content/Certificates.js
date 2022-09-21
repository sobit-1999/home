import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import wove from "../../img/wove.svg";
import Certificate1 from "../../img/Certificate1.png";
import Certificate2 from "../../img/Certificate2.png";
import Certificate3 from "../../img/Certificate3.png";
import Certificate4 from "../../img/Certificate4.png";

export default function Certificates() {
  const certificatesImg = [
    Certificate1,
    Certificate2,
    Certificate3,
    Certificate4,
  ];
  return (
    <>
      <img width="100%" alt="wove" src={wove} />
      <Box
        sx={{
          marginY: 5,
          textAlign: "center",

        }}
      >
        <Typography variant="h5" color="black">
          Сертификаты
        </Typography>
        <Card sx={{
          display: 'grid',
          gridTemplateColumns:'22% 22% 22% 22%',
          gridGap: '4%',
          boxShadow: 'none',
          marginY: 7
        }}>
        {certificatesImg.map((item, i ) => {return (
            <CardMedia
              component="img"
              image={item}
              alt="green iguana"
            />
            )})}
            </Card>
            

      <Button
        sx={{
          background: "red",
          color: "white",
          padding: "7px 15px",
          fontSize: "12px",
          marginBottom: "30px",
          ":hover": {
            background: "red",
            color: "white",
          },
        }}
      >
        Все Сертификаты
      </Button>
      </Box>
    </>
  );
}
