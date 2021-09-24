import {FC, Fragment} from "react";
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
          <Router key={location.pathname} location={location}>
            {children}
          </Router>
        </AnimatePresence>
      </div>
    )}
  </Location>
);

const ComponentWrapper: FC<RouteComponentProps & {key: string, element: JSX.Element}> = (props) => {
  return (
    <motion.div transition={{ type: "spring", duration: 0.325, damping: 12, bounce: 0.6 }}
      key={props.key}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
    >
      {props.element}
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
