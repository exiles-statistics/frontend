import {IndexPage} from "pages/index";
import {SectorResultPage} from "pages/result/sector";
import {BubbleChart, Home, PieChart, Upload} from "@mui/icons-material";
import {MaterialResultPage} from "pages/result/material";
import {ReportPage} from "pages/report";

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
    component: ReportPage,
    icon: Upload
  },
  {
    path: '/result/sector',
    name: '扇区掉率',
    component: SectorResultPage,
    icon: PieChart
  },
  {
    path: '/result/material',
    name: '材料掉率',
    component: MaterialResultPage,
    icon: BubbleChart
  }
]