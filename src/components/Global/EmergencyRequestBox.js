import { Box, Button, Typography } from "@mui/material";
import React from "react";

const EmergencyRequestBox = ({ content, btn }) => {
  const containerStyle = {
    width: "100%",
    margin: "0 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const boxStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxShadow:"5px 7px rgba(0, 0, 0, 0.2)"
  };

  const typographyStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#C51605",
    color: "white",
    padding: "10px 20px",
    margin:"1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px", 
  };

  return (
    <Box style={containerStyle}>

      <Box style={boxStyle}>
        <Box>
          <Typography style={{ ...typographyStyle, fontSize: "18px" }}>
            Blood Emergency
          </Typography>
          <p>{content}</p>
        </Box>

        <Box>
          <Button style={buttonStyle} variant="contained">
            {btn}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmergencyRequestBox;
