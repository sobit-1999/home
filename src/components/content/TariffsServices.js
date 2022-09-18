import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import wove from "../../img/wove.svg";

export default function TariffsServices() {
  const [valueRadio, setValueRadio] = React.useState("usd");
  const [valueHousePrice, setValueHousePrice] = useState(250000);

  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);
  };
  return (
    <Box className="tariffs-services-container">
      <img alt="wove" src={wove} width="100%" />
      <h2 className="lest-property-name">Калькулятор тарифов и услуг</h2>
      <p className="text">рассчитайте стоимость наших услуг</p>

      <Box className="tariffs-services-grid">
        <Box className="tariffs-services-card1">
          <p>Введите стоимость квартиры</p>
          <input
              type='number'
            value={valueHousePrice}
            onChange={(e) => setValueHousePrice(e.target.value)}
          />
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={valueRadio}
            onChange={handleChangeRadio}
            row
          >
            <FormControlLabel
              value="usd"
              control={
                <Radio
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
              }
              label="USD"
            />
            <FormControlLabel
              value="byr"
              control={
                <Radio
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
              }
              label="BYR"
            />
          </RadioGroup>
        </Box>
        <Box className="tariffs-services-card2">
          <p>Стоимость услуг</p>
          <Box className="service-price">
            <input
              style={{
                width: "30px",
              }}
              value="3 %"
            />
            <p>или</p>
            <input value={(valueHousePrice * 3) / 100 +' '+ valueRadio} />
          </Box>

          <Button
            sx={{
              background: "red",
              color: "white",
              padding: "7px 15px",
              fontSize: "12px",
              marginLeft: 20,
              ":hover": {
                background: "red",
                color: "white",
              },
            }}
          >
            Cвязаться
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
