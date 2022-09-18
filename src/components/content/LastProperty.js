import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import newHouse1 from "../../img/new-house.png";
import newHouse2 from "../../img/new-house2.png";
import newHouse3 from "../../img/new-house3.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InsightsIcon from '@mui/icons-material/Insights';

export default function LastProperty() {
  return (
    <Box sx={{ textAlign: "center", marginY: "50px" }}>
      <h2 className="lest-property-name">Последняя добавленная недвижимость</h2>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "31% auto 31%",
          gridGap: "3%",
          marginY: '40px'
        }}
      >
        {itemData.map((item, i) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                border: "none",
                boxShadow: "none",
                textAlign: "left",
                padding: "20px",
                transition: "1s",
                borderRadius: 3,
                ":hover": {
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={item.img}
                alt="green iguana"
                sx={{ borderRadius: 2 }}
              />
              <CardContent
                sx={{
                  fontSize: "12px",
                  padding: "10px 0",
                  display: "grid",
                  gridTemplateRows: "17px 54px 18px 18px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <LocationOnIcon
                    sx={{
                      color: "rgba(55, 55, 55, 0.5)",
                      fontSize: 20,
                      marginRight:1
                    }}
                  />
                  {item.address}
                </Typography>
                <Typography
                  gutterBottom
                  variant="p"
                  sx={{ fontSize: "18px" }}
                  component="div"
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", fontSize: '15px' }}
                  gutterBottom
                  variant="p"
                  component="div"
                >
                  <CompareArrowsIcon
                    sx={{
                      color: "red",
                      fontSize: 20,
                      marginRight: 1
                    }}
                  />
                  {item.surface}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", fontSize: '15px' }}
                  gutterBottom
                  variant="a"
                  component="div"
                >
                  <MonetizationOnIcon
                    sx={{
                      color: "red",
                      fontSize: 20,
                      marginRight:1
                    }}
                  />{" "}
                  {item.price}
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
              fontSize: '12px',
              marginX: '20px',
              ":hover": {
                background: "red",
                color: "white",
              }
            }}
          >
            Полный каталог недвижимости
          </Button>
          
          <Button
            sx={{
              background: "#fff",
              color: "red",
              padding: "6px 15px",
              fontSize: '12px',
              border: '1px solid red',
              marginX: '20px'
            }}
          >
            Аналитика цен за 1 кв.м. <InsightsIcon sx={{marginLeft: 2}}/>
          </Button>
    </Box>
  );
}

const itemData = [
  {
    img: newHouse1,
    address: "Гродно, ул. Большая Троицкая, 16",
    title: "Аренда торгово-офисного помещения",
    surface: "Площадь: 59,5м2",
    price: "Стоимость: 8$ / 20.17р. за м.кв.",
  },
  {
    img: newHouse2,
    title: "3-комнатная квартира в Гродно",
    address: "Гродно, пр. Космонавтов 4б,",
    surface: "Площадь: 74,5м2",
    price: "Стоимость: 93000$ / 234462.3р.",
  },
  {
    img: newHouse3,
    title: "3-комнатная квартира в Гродно",
    surface: "Площадь: 79,3м2",
    address: "Гродно, ул. Белые Росы, 3",
    price: "Стоимость: 54900$ / 138408.39р.",
  },
  {
    img: newHouse1,
    address: "Гродно, ул. Большая Троицкая, 16",
    title: "Аренда торгово-офисного помещения",
    surface: "Площадь: 59,5м2",
    price: "Стоимость: 8$ / 20.17р. за м.кв.",
  },
  {
    img: newHouse2,
    title: "3-комнатная квартира в Гродно",
    address: "Гродно, пр. Космонавтов 4б,",
    surface: "Площадь: 74,5м2",
    price: "Стоимость: 93000$ / 234462.3р.",
  },
  {
    img: newHouse3,
    title: "3-комнатная квартира в Гродно",
    surface: "Площадь: 79,3м2",
    address: "Гродно, ул. Белые Росы, 3",
    price: "Стоимость: 54900$ / 138408.39р.",
  },
];
