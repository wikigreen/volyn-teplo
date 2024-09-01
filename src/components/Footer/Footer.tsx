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
      }}
    >
      <Box
        component="img"
        sx={{
          height: "auto",
          width: "auto",
          float: "left",
          my: "auto",
        }}
        alt={"logo"}
        src={logo}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", padding: 4, gap: 1 }}
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
