import {IndexPage} from "pages/index";

export const routes = [
  {
    path: '/',
    name: '首页',
    component: IndexPage
  },
  {
    path: '/report',
    name: '汇报掉率'
  },
  {
    path: '/result/sector',
    name: '扇区掉率',
  },
  {
    path: '/result/material',
    name: '物品掉率'
  },
  {
    path: '/about',
    name: '关于我们'
  }
]