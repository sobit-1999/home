import { Box } from "@mui/system";
import React from "react";
import logo from "../../img/logo.svg";
import wove from "../../img/wove.svg";
import { IconButton, Typography } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Call,
  Facebook,
  Instagram,
  WaterSharp,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  const IconsLink = [WaterSharp, Instagram, YouTube, Facebook];
  return (
    <Box
      sx={{
        padding: "60px 14% 10px 14%",
        background: "rgb(14, 55, 86)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "22% 22% 22% 22%",
          gridGap: "4%",
          color: "rgba(255, 255, 255, 0.7)",
          marginBottom: 10,
        }}
      >
        <Box>
          <img width="120px" alt="Logo" src={logo} />

          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ fontSize: "15px" }}
          >
            ООО «Магазин недвижимости»
          </Typography>

          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ fontSize: "15px" }}
          >
            УНП 124764878
          </Typography>
          {IconsLink.map((Item, i) => {
            return (
              <IconButton
                key={i}
                sx={{
                  background: "rgba(255, 255, 255, 0.7)",
                  color: "black",
                  marginY: 2,
                  marginRight: 1,
                  ":hover": {
                    background: "#fff",
                  },
                }}
              >
                {<Item />}
              </IconButton>
            );
          })}
          <Typography
            variant="a"
            component="div"
            gutterBottom
            sx={{
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            Реквизиты
          </Typography>
        </Box>

        {dataCall.map((item, i) => {
          return (
            <Box>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontSize: "17px",
                }}
              >
                {item.name}
              </Typography>

              {item.category.map((item2, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: index !== 3 ? "center" : "top",
                      marginY: i === 2 && index === 2 ? "20px" : "3px",
                    }}
                  >
                    <item2.icon
                      sx={{
                        fontSize: "15px",
                        marginRight: "5px",
                      }}
                    />
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {item2.link}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <img width="100%" alt="wove" src={wove} />
      <Box
        sx={{
          display: "flex",
          marginY: 3,
          color: "rgba(255,255,255, 0.5)",
          justifyContent: "space-between",
        }}
      >
        <Typography component="div" variant="p">
          ООО «Магазин недвижимости» - продажа недвижимости 2021 ©
        </Typography>

        <Typography component="div" variant="p">
          Редизайн сайта
        </Typography>
      </Box>
    </Box>
  );
}

const dataCall = [
  {
    name: "г. Гродно",
    category: [
      {
        icon: Call,
        link: "+375 (152) 68-76-76",
      },
      {
        icon: Call,
        link: "+375 (44) 596-76-76",
      },
      {
        icon: Call,
        link: "+375 (29) 596-76-76",
      },
      {
        icon: LocationOnIcon,
        link: '230023, г. Гродно, Беларусь,ул. Тимирязева, д. 10/1, офис 4 (БЦ "Августовский")',
      },
    ],
  },
  {
    name: "г. Волковыск",
    category: [
      {
        icon: Call,
        link: "+375 (1512) 25-45-4",
      },
      {
        icon: Call,
        link: "+375 (33) 903-45-49",
      },
      {
        icon: Call,
        link: "+375 (29) 623-74-16",
      },
    ],
  },
  {
    name: "Время работы:",
    category: [
      {
        icon: QueryBuilderIcon,
        link: "Пн – Пт: 09:00 – 19:00",
      },
      {
        icon: QueryBuilderIcon,
        link: "Сб: 09:00 – 15:00",
      },
      {
        icon: MailOutlineIcon,
        link: "info@shoprealty.by",
      },
    ],
  },
];
