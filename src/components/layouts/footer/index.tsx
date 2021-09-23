import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FC} from "react";
import styles from './index.module.scss'

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return <Box sx={{p: 6}} component="footer" className={styles["root"]}>
    <Typography variant="subtitle2" align="center">
      流亡者情报站 · 数据协议 CC BY-NC-SA 4.0 · 源代码协议 LGPTv3
    </Typography>
    {/*<Typography*/}
    {/*  variant="subtitle1"*/}
    {/*  align="center"*/}
    {/*  color="text.secondary"*/}
    {/*  component="p"*/}
    {/*>*/}
    {/*  Something here to give the footer a purpose!*/}
    {/*</Typography>*/}
  </Box>;
}