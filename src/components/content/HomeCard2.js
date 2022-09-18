import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { border, Stack } from "@mui/system";
import { Button, Card, Slider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function valuetext(valueSlider) {
  return `${valueSlider}$`;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomeCard2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [valueSlider, setValueSlider] = React.useState([0, 94500]);

  const handleChangeSlider = (event, newValueSlider) => {
    setValueSlider(newValueSlider);
  };

  const categoryCvartira = ["Купить", "Вторичка", "Кол-во комнат", "Цена"];
  const categoryPurchase = [
    { name: "Купить", text: "Всего предложений", number: "436" },
    { name: "Продать", text: "Всего предложений", number: "326" },
    { name: "Обменять", text: "Всего предложений", number: "134" },
    { name: "Новостройки со скидкой", text: "Всего предложений", number: "68" },
  ];
  return (
    <>
      <Box
        sx={{
          width: "72%",
          marginX: "14%",
          background: "rgb(39, 47, 61)",
          color: "#fff",
          paddingBottom: 2,
          borderRadius: 5,
          marginTop: "-110px",
          position: "absolute",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "rgb(79, 83, 103)" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            //   sx={{ color: "red" }}
          >
            <Tab sx={{ color: "#fff" }} label="Квартиры" {...a11yProps(0)} />
            <Tab
              sx={{ color: "#fff" }}
              label="Дома и участки"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ color: "#fff" }}
              label="Коммерческая"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
              alignItems: "center",
              paddingX: "40px",
              background: "#fff",
              color: "#000",
              borderRadius: "15px",
              gridGap: "0px",
            }}
          >
            {categoryCvartira.map((item, i) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRight: "1px solid rgba(0, 0, 0, 0.21)",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <p key={i}> {item} </p> <ExpandMoreIcon />{" "}
                </Box>
              );
            })}
            <p style={{ color: "rgba(0, 0, 0, 0.41) ", textAlign: "center" }}>
              Укажите город / регион поиска
            </p>
          </Box>

          <Box
            sx={{
              marginTop: "25px",
              display: "grid",
              gridTemplateColumns: "54% 29% auto auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "none",
                padding: "6px 10px",
                width: "230px",
                color: "#fff",
                borderRadius: "7px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <ZoomInIcon className="search-icon" />
              <input placeholder="Расширенный поиск" className="search-input" />
            </Box>

            <Box>
              <Card
                sx={{
                  width: "250px",
                  position: "absolute",
                  padding: "10px 20px",
                  marginTop: "-10px",
                  borderRadius: 2,
                }}
              >
                <p>Цена в долларах США</p>
                <Box className="home-card2-money">
                  <input value={valueSlider[0] + "$"} />
                  <input
                    style={{
                      borderLeft: "1px solid rgba(0, 0, 0, 0.315)",
                      borderRadius: "0  10px 10px 0",
                    }}
                    value={valueSlider[1] + "$"}
                  />
                </Box>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={valueSlider}
                  onChange={handleChangeSlider}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={100000}
                  step={100}
                  sx={{ color: "red" }}
                />
              </Card>
            </Box>

            <Button
              sx={{
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: "white",
                padding: "7px 15px",
                fontSize: "12px",
                marginRight: "10px",
                ":hover": {
                  color: "white",
                },
              }}
            >
              На карте
            </Button>

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
              Найти
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "24% 24% 24% auto",
          gridGap: "2%",
          marginTop: 20,
          marginX: "14%",
        }}
      >
        {categoryPurchase.map((item, i) => {
          return (
            <Box
              //   sx={{ width: "100%", background: "blue" }}
              className="category-purchase"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>{item.name}</h2> <ArrowForwardIosIcon 
                sx={{
                    fontSize: 16
                }}
                />{" "}
              </Box>
              <p>{item.text}</p>
              <h4>{item.number}</h4>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
