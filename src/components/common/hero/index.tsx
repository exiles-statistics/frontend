import {FC} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface HeroProps {
  title: JSX.Element | string
  subtitle: JSX.Element | string

  depressed?: boolean
}

export const Hero: FC<HeroProps> = ({ title, subtitle, depressed }) => {
  return (
    <>
      <Typography
        component="h1"
        variant={depressed ? 'h3' : 'h2'}
        color="text.primary"
        fontWeight="bold"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        {subtitle}
      </Typography>
    </>
  )
}