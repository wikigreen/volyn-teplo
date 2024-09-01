import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";

type TextCardProps = {
  title: string;
  src: string;
};

export const LogoCard: FC<PropsWithChildren<TextCardProps>> = ({
  title,
  src,
}) => {
  return (
    <Card
      sx={{
        width: "100%", // Card will take the full width of its parent
        height: "100%", // Card will take the full height of its parent
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden", // Ensures content doesn't overflow the card
      }}
    >
      <CardMedia
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
          alt={title}
          src={src}
        />
      </CardMedia>
      <CardContent
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" textAlign="center">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
