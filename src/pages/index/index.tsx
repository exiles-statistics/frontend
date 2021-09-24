import {FC} from "react";
import {RouteComponentProps} from "@reach/router";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {LinkCard} from "components/common/link-card";
import {CardMedia, Grid} from "@mui/material";
import styles from './index.module.scss'
import {Link} from '@reach/router'
import {Hero} from "components/common/hero";

export const IndexPage: FC<RouteComponentProps> = props => {
  return (
    <div className={styles['root']}>
      <Hero
        title={
          <>
            欢迎来到{ <br /> }流亡者情报站
          </>
        }
        subtitle={
          "流亡者情报站致力于收集「少女前线：云图计划」的相关掉率数据。"
        }
      />

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Link to="/result/sector">
            <LinkCard
              title="扇区掉率"
              subtitle="查看各扇区的物资掉落情况"
              media={
                <CardMedia
                  component="img"
                  alt="扇区掉率背景图"
                  aria-hidden
                  sx={{ height: 210 }}
                  src={require("../../assets/images/bg.jpg").default}
                />
              }
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to="/result/material">
            <LinkCard
              title="材料掉率"
              subtitle="查看各材料于各个扇区的掉落情况"
              media={
                <CardMedia
                  component="img"
                  alt="材料掉率背景图"
                  aria-hidden
                  sx={{ height: 210 }}
                  src={require("../../assets/images/bg.jpg").default}
                />
              }
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}