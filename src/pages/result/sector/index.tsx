import {FC, useState} from "react";
import {RouteComponentProps} from "@reach/router";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import {Button, Card, CardActionArea, CardContent, CardHeader, Typography} from "@mui/material";
import {SectorSelector} from "components/sectors/sector-selector";
import {Hero} from "components/common/hero";
import * as React from "react";



export const SectorResult: FC<RouteComponentProps> = props => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <Hero
        depressed
        title={
          <>
            扇区{ <br /> }掉率统计
          </>
        }
        subtitle={
          "使用下方的扇区筛选器、并点选相关扇区名称，即可查询对应扇区的掉率情况"
        }
      />

      <SectorSelector />
    </>
  )
}