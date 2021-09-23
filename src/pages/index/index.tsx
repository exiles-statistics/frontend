import {FC} from "react";
import {RouteComponentProps} from "@reach/router";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const IndexPage: FC<RouteComponentProps> = props => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        color="text.primary"
        fontWeight="bold"
        gutterBottom
      >
        欢迎来到{ <br /> }流亡者情报站
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        流亡者情报站致力于收集「少女前线：云图计划」的相关掉率数据。
      </Typography>
    </>
  )
}