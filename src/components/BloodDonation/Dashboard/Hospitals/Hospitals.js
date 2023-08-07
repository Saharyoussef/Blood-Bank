import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { HospitalsData } from "../../../../data/Data";
import React from "react";
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { CssBaseline } from "@mui/material";

const Hospitals = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "adress",
      headerName: "Address",
      flex: 1,
    },
  ];

  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", overflowX:"hidden" }}>
      <CssBaseline />
      <Box
        sx={{
          background: "radial-gradient(circle at 49% 48%, rgba(255, 251, 251, 1) 0%, rgba(255, 237, 237, 1) 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar />
        <Box display="flex" flexGrow={1} overflow="auto" style={{ overflowX: "hidden" }}>
          <Sidebar flex="2" />
          <Box marginLeft="25%" />
          <Box
            marginTop="4%"
            width="calc(100% - 25%)"
            height="75vh"
            marginRight="5%"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                backgroundColor: "transparent",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#C51605",
                color: "white",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
              },
              "& .MuiDataGrid-virtualScroller": {},
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={HospitalsData}
              columns={columns}
              getCellClassName={(params) => {
                if (
                  params.field === "id" ||
                  params.field === "email" ||
                  params.field === "phone" ||
                  params.field === "adress"
                ) {
                  return "MuiDataGrid-cellRed";
                }
                return null;
              }}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hospitals;
