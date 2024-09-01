import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { LogoCard } from "../../components/LogoCard";

import kalvisLogo from "../../../src/assets/kalvis.png";
import vaillant from "../../../src/assets/Vaillant.svg";
import kolvi from "../../../src/assets/kolvi.png";
import wolf from "../../../src/assets/wolf.jpg";
import viessmann from "../../../src/assets/viessmann.svg";
import ferolli from "../../../src/assets/Ferroli.png";
import kriger from "../../../src/assets/kriger.png";
import buderus from "../../../src/assets/buderus.png";

export const Boilers: FC = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        fontWeight={700}
      >
        Котли та котлоагрегати
      </Typography>
      <Typography variant="body1" paragraph>
        Наша компанія готова підібрати, запроектувати та змонтувати для Вас
        котли та котельні вітчизняного та закордонного виробництва в найкоротші
        терміни. Котли можуть працювати як на природному газі так і на
        альтернативному паливі. Потужності котлів від 100 КВт до 10 000 КВт і
        більше.
      </Typography>
      <Typography variant="body1" paragraph>
        Маємо дистрибуцію з:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", sm: "1fr" },
          gridTemplateRows: "1fr",
          gap: "2rem",
          marginBottom: "1rem",
        }}
      >
        <LogoCard title="Kalvis" src={kalvisLogo} />
        <LogoCard src={viessmann} title="Viessmann" />
        <LogoCard src={kolvi} title="Kolvi" />
        <LogoCard src={wolf} title="Wolf" />
        <LogoCard src={vaillant} title="Vaillant" />
        <LogoCard src={ferolli} title="Ferroli" />
        <LogoCard src={kriger} title="Kriger" />

        <LogoCard src={buderus} title="Buderus" />
      </Box>
      <Typography variant="body1" paragraph>
        Вартість обладнання можлива з ПДВ та без ПДВ. Обговорюється та
        підбирається індивідуально до вимог та потреб Замовника.
      </Typography>
    </Container>
  );
};
