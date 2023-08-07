import React from 'react';
import Sidebar from './Sidebar'
import Topbar from './Topbar';
import {CssBaseline,Box, Typography} from "@mui/material";
import EmergencyRequestBox from '../../Global/EmergencyRequestBox';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const BloodQuantity = [100,350,450,250,400,150];
const xLabels = [
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];


const Dashboard=()=>{

    return (
      //le style du div et celui de sx du box sont essentil pour que couleur du fond soit sur toute la page
        <div style={{ margin: 0, padding: 0,height: "100vh" , "@media (max-width: 1280px)": {
          overflowX: "hidden",
        },}}>
          <CssBaseline></CssBaseline>
          <Box
            sx={{background: "radial-gradient(circle at 49% 48%, rgba(255, 251, 251, 1) 0%, rgba(255, 237, 237, 1) 100%)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            }}>
            <Topbar></Topbar> 
            <Box display="flex" flexGrow={1} overflow="auto">
              <Sidebar flex="2"></Sidebar>       
              <Box 
                marginLeft="25%"
                marginTop="3.5rem"
                marginBottom="5.5rem"
                sx={{
                  "@media (max-width: 1538px)": {
                    marginBottom:"10rem",
                  },
                  "@media (max-width: 1280px)": {
                    marginBottom:"12rem",
                    marginLeft:"10%",
                    marginRight:"10%",
                  },

                  "@media (max-width: 1088px)": {
                    marginLeft:"30%",
                    marginRight:"2%",
                  },
                    }}
              >

                  {/* GRID & CHARTS */}
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(9, 1fr)"
                    gridAutoRows="240px"
                    gridAutoColumns="200px"
                    gap="20px"
                    sx={{"@media (max-width: 1088px)": {
                      display: "flex",
                      flexDirection:"column",
                      alignItems: "center",
                      justifyContent: "center",
                    },}}
                  >
                    {/* ROW 1 */}
                    <Box
                      gridColumn="span 3"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        "@media (max-width: 1280px)": {
                          width:"15rem",
                        },
                        "@media (max-width: 1088px)": {
                          width:"30rem",
                          marginLeft:"2rem",
                        },
                        }}
                    >
                      <EmergencyRequestBox
                        content="Sarah, is fighting for her life after a severe accident.She urgently needs O-negative blood"
                        btn="Save Sarah"
                      />
                    </Box>
                    
                    <Box
                      gridColumn="span 3"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        "@media (max-width: 1280px)": {
                          marginLeft:"2rem",
                          width:"15rem",
                        },
                        "@media (max-width: 1538px)": {
                          marginLeft:"2rem",
                        },
                        "@media (max-width: 1088px)": {
                          width:"30rem",
                        },
                        
                      }}
                    >
                      <EmergencyRequestBox
                        content="Amir, a 12-year-old boy, is bravely battling a life-threatening illness. His needs A-positive blood."
                        btn="Save Amir"
                      />
                    </Box>
                    
                    <Box
                      gridColumn="span 3"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        "@media (max-width: 1280px)": {
                          marginLeft:"2rem",
                          width:"15rem",
                        },
                        "@media (max-width: 1538px)": {
                          marginLeft:"2rem",
                        },
                        "@media (max-width: 1088px)": {
                          width:"30rem",
                        },}}
                    >
                      <EmergencyRequestBox
                        content="Nadine, a dedicated nurse.She requires immediate surgery and B-negative blood."
                        btn="Save Nadine"
                      />
                    </Box>
                  </Box>
 
                  {/* ROW 2 */}
                  <Box 
                    display="flex"
                    marginTop="4rem"
                    sx={{"@media (max-width: 1088px)": {
                      display: "flex",
                      flexDirection:"column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight:"5%"
                    },}}
                  >
                  <Box 
                    marginRight="4rem"
                    sx={{background: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    boxShadow: "5px 7px rgba(0, 0, 0, 0.2)",
                    "@media (max-width: 1088px)": {
                      marginTop:"4rem",
                      width:"30rem",
                      marginLeft:"4rem",
                    },}} 
                   >

                      <Typography variant="h5" fontWeight="600" color="#363636">
                        Donated Blood Quantity
                      </Typography>
                      
                        <BarChart
                          width={400}
                          height={300}
                          series={[
                            { data: BloodQuantity, 
                              label: 'Blood Quantity', 
                              id: 'BloodQuantity', 
                              stack: 'total',
                              color:'#C51605' },
                          ]}
                          xAxis={[{ data: xLabels, scaleType: 'band' }]}
                        />
                      
                  </Box>

                  <Box 
                    sx={{background: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    boxShadow: "5px 7px rgba(0, 0, 0, 0.2)",
                    "@media (max-width: 1088px)": {
                      marginTop:"4rem",
                      width:"30rem",
                      marginLeft:"2rem",
                    },}} >
                      
                    <Typography variant="h5" fontWeight="600" marginBottom="4rem" color="#363636">
                      Blood Donation & Blood Request
                    </Typography>
                      
                    <PieChart
                          series={[
                            {
                              data: [
                                { id: 0, value: 40, label: 'Donation' },
                                { id: 1, value: 60, label: 'Request' },
                              ],
                            },
                          ]}
                          width={400}
                          height={200}
                          colors={['#C51605','#EDE9D0']}
                          gap={50}
                      />
                      
                  </Box>
                </Box>  
                  
              </Box>
            </Box>
          </Box>

        </div>
    )
  }

  
export default Dashboard;