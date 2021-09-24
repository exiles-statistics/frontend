import {Box, Button, SvgIcon} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FC} from "react";
import {GitHub} from "@mui/icons-material";
import styles from './index.module.scss'

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <Box component="footer" className={styles["root"]}>
      <Typography variant="subtitle2" align="center" sx={{ pb: 1 }}>
        数据协议 CC BY-NC-SA 4.0 <br />源代码协议 LGPTv3
      </Typography>

      <Button
        href="https://github.com/exiles/frontend"
        variant="outlined"
        size="small"
        target="_blank"
        startIcon={
          <GitHub />
        }
      >
        GitHub
      </Button>
      {/*<Typography*/}
      {/*  variant="subtitle1"*/}
      {/*  align="center"*/}
      {/*  color="text.secondary"*/}
      {/*  component="p"*/}
      {/*>*/}
      {/*  Something here to give the footer a purpose!*/}
      {/*</Typography>*/}
    </Box>
  );
}