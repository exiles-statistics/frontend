import {FC} from "react";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface LinkCardProps {
  title: JSX.Element | string
  subtitle: JSX.Element | string
  background?: string
  media?: JSX.Element
}

/* LinkCard provides an opinionated way to display hyperlinking information in which navigates the user around the site */
export const LinkCard: FC<LinkCardProps> = ({ background, title, subtitle, media }) => {
  return (
    <Card style={{ ...(background ? { background: `url(${background})` } : null) }}>
      <CardActionArea>
        { media }

        <CardContent>
          {/*<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
          {/*  Word of the Day*/}
          {/*</Typography>*/}
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}