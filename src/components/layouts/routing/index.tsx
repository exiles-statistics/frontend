import {FC} from "react";
import {routes} from "config/routes";
import {Router} from "@reach/router";

interface RoutingProps {}

export const Routing: FC<RoutingProps> = (props) => {
  return (
    <Router>
      {
        routes
          .filter(route => !!route.component)
          .map(route => {
            const RouteComponent = route.component
            if (!RouteComponent) return

            return <RouteComponent path={route.path} />
          })
      }
    </Router>
  )
}
