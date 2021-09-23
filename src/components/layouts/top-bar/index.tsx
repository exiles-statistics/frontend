import {FC} from "react";
import {AppBar, Toolbar} from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from 'components/layouts/top-bar/index.module.scss'
import {routes} from "config/routes";
import {Link} from '@reach/router';

interface TopBarProps {}

export const TopBar: FC<TopBarProps> = (props) => {
  return (
    <AppBar position="relative" className={styles['root']}>
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap fontWeight="bold" sx={{
          mr: 2
        }}>
          流亡者情报站
        </Typography>

        {
          routes.map(route => (
            <Link to={route.path} className={styles['link']}>
              {route.name}
            </Link>
          ))
        }
      </Toolbar>
    </AppBar>
  )
}