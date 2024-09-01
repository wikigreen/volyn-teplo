import { FC } from "react";
import { Box } from "@mui/material";
import logo from "../../assets/result.png";
import { TextCard } from "../TextCard";

export const Footer: FC = () => {
  return (
    <Box
      sx={{
        marginTop: "auto",
        width: "100%",
        padding: 4,
        gap: 1,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: { xs: "300px", sm: "auto" },
          order: { xs: "1", sm: "unset" },
          width: "auto",
          float: "left",
          my: "auto",
          objectFit: "contain",
        }}
        component="img"
        alt={"logo"}
        src={logo}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 4,
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <TextCard small title={"Юридична адреса:"}>
          Волинська Область, місто Луцьк, вул. Героїв Упа 2г
        </TextCard>
        <TextCard small title={"Адреса виробництва:"}>
          Волинська Область, Рожищенський район, село Носачевичі
        </TextCard>
        <TextCard small title={"e-mail:"}>
          <a href="mailto:volynteplo@gmail.com">volynteplo@gmail.com</a>
        </TextCard>
        <TextCard small title={"тел.:"}>
          <a href="tel:+380673325192">+38 067 332 51 92</a>
        </TextCard>
      </Box>
    </Box>
  );
};
