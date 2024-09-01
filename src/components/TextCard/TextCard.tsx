import { Card, CardContent, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren, ReactNode } from "react";

type TextCardProps = {
  title: ReactNode;
};

export const TextCard: FC<PropsWithChildren<TextCardProps>> = ({
  title,
  children,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          fontWeight={"bold"}
          align="left"
        >
          {title}
        </Typography>
        <Divider />
        <Typography variant="body1" paragraph align="left">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};
