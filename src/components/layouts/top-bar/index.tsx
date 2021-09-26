import {FC} from "react";
import {AppBar, Toolbar, useMediaQuery} from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from 'components/layouts/top-bar/index.module.scss'
import {routes} from "config/routes";
import {Link} from '@reach/router';
import clsx from "clsx";
import theme from "theme";

interface TopBarProps {}

export const TopBar: FC<TopBarProps> = (props) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <AppBar position="sticky" className={styles['root']}>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap fontWeight="bold" sx={{
            mr: 2
          }}>
            流亡者情报站
          </Typography>

          {
            isDesktop &&
            routes.map(route => (
              <Link key={route.path} to={route.path} getProps={({ isCurrent }) => ({
                className: clsx(
                  styles['link'],
                  isCurrent ? styles['link-active'] : null
                )
              })}>
                {route.name}
              </Link>
            ))
          }
        </Toolbar>
      </AppBar>
    </>
  )
}