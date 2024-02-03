import { Box, Button, Container, Stack, Typography } from "@mui/material";

import React, { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(++counter);
  };
  const handleSub = () => {
    setCounter(--counter);
  };

  return (
    <div>
      <Container sx={ContainerStyle}>
        <Box sx={BoxStyle}>
          <Typography align="center" variant="h3" gutterBottom>
            Counter App
          </Typography>
          <Typography sx={Text} align="center" variant="h1" gutterBottom>
            {counter}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              sx={Btn1}
              variant="outlined"
              onClick={handleAdd}
              disabled={counter >= 20}
            >
              +
            </Button>
            <Button
              sx={Btn2}
              variant="outlined"
              onClick={handleSub}
              disabled={counter <= 0}
            >
              -
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

const BoxStyle = {
  border: "3px solid blue",
  background: "#E5E8E8",
  borderRadius: "20px",
  width: "50%",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px ",
};
const Text = {
  background: "blue",
  border: "2px solid blue",
  borderRadius: "10px",
  height: "100px",
  width: "120px",
  color: "white",
};
const ContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "840px",
};
const Btn1 = {
  background: "green",
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
  border: "2px solid blue",
  borderRadius: "10px",
};

const Btn2 = {
  background: "red",
  color: "black",
  fontSize: "25px",
  fontWeight: "bold",
  border: "2px solid blue",
  borderRadius: "10px",
};
