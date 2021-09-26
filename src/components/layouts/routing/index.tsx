import {FC, Fragment, useEffect, useLayoutEffect} from "react";
import {routes} from "config/routes";
import {Location, RouteComponentProps, Router} from "@reach/router";
import {AnimatePresence, motion, MotionConfig} from "framer-motion";
import styles from './index.module.scss'

interface RoutingProps {}

const FramerRouter: FC<{}> = ({ children }) => (
  <Location>
    {({ location }) => (
      <div style={{ position: "relative" }} className={styles['route']}>
        <AnimatePresence>
          <Router primary={false} key={location.pathname} location={location}>
            {children}
          </Router>
        </AnimatePresence>
      </div>
    )}
  </Location>
);

const ComponentWrapper: FC<RouteComponentProps & {element: JSX.Element}> = ({ path, element }) => {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [path])

  return (
    <motion.div transition={{ type: "spring", duration: 0.275, damping: 12, bounce: 0.6 }}
      key={path}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
    >
      {element}
    </motion.div>
  )
}

export const Routing: FC<RoutingProps> = (props) => (
  <FramerRouter>
    {
      routes
        .filter(route => !!route.component)
        .map(route => {
          const RouteComponent = route.component
          if (!RouteComponent) return null

          return (
            <ComponentWrapper
              key={route.path}
              path={route.path}
              element={
                <RouteComponent />
              }
            />
          )
        })
    }
  </FramerRouter>
)
