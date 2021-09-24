import {IndexPage} from "pages/index";
import {SectorResult} from "pages/result/sector";
import {AccountBox, BubbleChart, Home, PieChart, Upload} from "@mui/icons-material";
import {MaterialResult} from "pages/result/material";
import {Report} from "pages/report";

export const routes = [
  {
    path: '/',
    name: '首页',
    component: IndexPage,
    icon: Home
  },
  {
    path: '/report',
    name: '汇报掉率',
    component: Report,
    icon: Upload
  },
  {
    path: '/result/sector',
    name: '扇区掉率',
    component: SectorResult,
    icon: PieChart
  },
  {
    path: '/result/material',
    name: '材料掉率',
    component: MaterialResult,
    icon: BubbleChart
  }
]