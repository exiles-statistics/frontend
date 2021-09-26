import {FC} from "react";
import {Alert, AlertTitle, Button} from "@mui/material";
import {GitHub} from "@mui/icons-material";
import * as React from "react";

export const UnderDevelopment: FC<{}> = props => {
  return (
    // <Backdrop
    //   sx={{ display: 'fixed', top: 0, left: 0, zIndex: 0 }}
    //   open={true}
    // >
    //   <Container maxWidth="lg" className={styles['root']}>
    //     <Typography
    //       component="h1"
    //       variant="h2"
    //       color="white"
    //       fontWeight="bold"
    //       gutterBottom
    //     >
    //       正在建设中
    //     </Typography>
    //
    //     <Typography variant="h5" color="grey.200">
    //       后端正在开发中...
    //     </Typography>
    //
    //     <Typography variant="h5" color="grey.200" sx={{ display: "flex", alignItems: "center", mt: 1 }}>
    //       欢迎前往
    //       <Button
    //         href="https://github.com/exiles"
    //         sx={{
    //           color: '#f0f0f0',
    //           borderColor: '#f0f0f0',
    //           mx: 1,
    //           '&:hover': {
    //             borderColor: '#b0b0b0',
    //           }
    //         }}
    //         size="small"
    //         variant="outlined"
    //         target="_blank"
    //         startIcon={
    //           <GitHub />
    //         }
    //       >
    //         GitHub
    //       </Button>
    //       围观
    //     </Typography>
    //
    //   </Container>
    // </Backdrop>

    <Alert severity="info">
      <AlertTitle>正在建设中</AlertTitle>
        后端正在开发中... — 欢迎前往
        <Button
          href="https://github.com/exiles"
          size="small"
          sx={{ mx: 1 }}
          target="_blank"
          startIcon={
            <GitHub />
          }
        >
          GitHub
        </Button>
        围观
    </Alert>
  )
}