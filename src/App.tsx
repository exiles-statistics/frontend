import * as React from 'react';
import Container from '@mui/material/Container';
import {TopBar} from "components/layouts/top-bar";
import {Routing} from "components/layouts/routing";
import {BottomBar} from "components/layouts/bottom-bar";
import {createHistory, LocationProvider} from "@reach/router";
import {Background} from "components/layouts/background";

// @ts-ignore
let history = createHistory(window)

export default function App() {
  return (
    <LocationProvider history={history}>
      <Background />
      <TopBar />
      <Container maxWidth="lg" className="mt-8 pb-24 md:mt-16">
        <Routing />
      </Container>
      <BottomBar />
      {/* Footer */}
      {/*<Footer />*/}
      {/*End footer*/}
    </LocationProvider>
  );
}
