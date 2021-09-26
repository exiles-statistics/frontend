import {FC} from "react";
import {BottomNavigation, BottomNavigationAction, Box, useMediaQuery} from "@mui/material";
import theme from "theme";
import {routes} from "config/routes";
import {Link, useLocation} from "@reach/router";
import * as React from "react";
import styles from './index.module.scss'

export const BottomBar: FC<{}> = props => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const location = useLocation()

  if (isDesktop) return null

  return (
    <Box className={styles['root']}>
      <BottomNavigation value={location.pathname}>
        {
          routes.map(route => {
            const Icon = route.icon
            return (
              <BottomNavigationAction
                component={Link}
                to={route.path}
                key={route.path}
                value={route.path}
                label={route.name}
                icon={<Icon />}
              />
            )
          })
        }
      </BottomNavigation>
    </Box>
  )
}