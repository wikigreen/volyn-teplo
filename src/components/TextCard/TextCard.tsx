import { Card, CardContent, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren, ReactNode } from "react";

type TextCardProps = {
  title: ReactNode;
  small?: boolean;
};

export const TextCard: FC<PropsWithChildren<TextCardProps>> = ({
  title,
  small = false,
  children,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        ...(small ? { paddingBottom: 0 } : {}),
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: small ? "row" : "column",
          ...(small ? { padding: 0 } : {}),
        }}
      >
        <Typography
          variant={small ? "body2" : "h5"}
          component="h1"
          gutterBottom
          fontWeight={"bold"}
          align="left"
        >
          {title}
        </Typography>
        <Divider variant={small ? "middle" : undefined} />
        <Typography
          variant={small ? "caption" : "body1"}
          paragraph
          align="left"
        >
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};
