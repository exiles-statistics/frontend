import * as React from 'react';
import Container from '@mui/material/Container';
import {TopBar} from "components/layouts/top-bar";
import {Routing} from "components/layouts/routing";
import {Footer} from "components/layouts/footer";

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        {/* Hero unit */}
        <Container maxWidth="lg" className="mt-8 md:mt-16">
          <Routing/>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/*End footer*/}
    </>
  );
}
