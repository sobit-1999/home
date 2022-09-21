// kampanya haqida
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import logo from "../../img/Group.svg";

export default function AboutCompany() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "50% auto",
        gridGap: "7%",
        marginY: "130px",
      }}
    >
      <CardContent
        sx={{
          paddingY: "50px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: 30, marginBottom: 2 }}
        >
          О компании
        </Typography>
        <Typography variant="p" color="text.secondary">
          «Магазин недвижимости» – риэлтерское агентство в Гродно, Гродненском
          районе и Волковыске. Мы сопровождаем клиента от мысли о купле-продаже
          недвижимости до юридически грамотной и успешной сделки.
          Специализируемся на продаже, покупкеи обмене квартир, домов и
          коммерческой недвижимости, осуществляем юридическое сопровождение
          сделок, помогаем с оценкой и аналитикой, выгодным инвестированием,
          переводом квартир в нежилой фонд и другими услугами
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
          Подробнее
        </Button>
      </CardContent>
      <img alt="img-logo" width="70%" src={logo} />
    </Box>
  );
}
