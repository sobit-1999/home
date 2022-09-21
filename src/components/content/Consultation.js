import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import ConsultationImg from "../../img/consultation.png";

// maslahatlashuv
export default function Consultation() {
  return (
    // <Card >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "47% auto",
        gridGap: "7%",
        marginY: "130px",
      }}
    >
      <CardMedia
        sx={{
          borderRadius: "10px",
        }}
        component="img"
        height="400"
        image={ConsultationImg}
        alt="green iguana"
      />
      <CardContent
        sx={{
          paddingY: "50px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 30,
        marginBottom: 2,
        }}
        >
          Задайте вопрос эксперту или получите бесплатную консультацию
        </Typography>
        <Typography variant="p" color="text.secondary">
          Нужен совет эксперта? Не удалось найти интересующую информацию на
          сайте или остались вопросы? Задайте их профессионалу. Свяжитесь с нами
          по указанным ниже телефонам или заполните форму обратной связи
        </Typography>

        <Button
          sx={{
            display: "block",
            background: "red",
            color: "white",
            padding: "7px 15px",
            fontSize: "12px",
            marginY: 4,
            ":hover": {
              background: "red",
              color: "white",
            },
          }}
        >
          Задать вопрос эксперту
        </Button>
      </CardContent>
    </Box>
    // </Card>
  );
}
