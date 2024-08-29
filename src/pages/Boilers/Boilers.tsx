import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const Boilers: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Котли та котлоагрегати
        </Typography>
        <Typography variant="body1" paragraph>
          Наша компанія готова підібрати, запроектувати та змонтувати для Вас
          котли та котельні вітчизняного та закордонного виробництва в
          найкоротші терміни. Котли можуть працювати як на природному газі так і
          на альтернативному паливі. Потужності котлів від 100 КВт до 10 000 КВт
          і більше.
        </Typography>
        <Typography variant="body1" paragraph>
          Маємо дистрибуцію з:
        </Typography>
        <ul>
          <li>Kalvis</li>
          <li>Viessmann</li>
          <li>Kolvi</li>
          <li>Wolf</li>
          <li>Vaillant</li>
          <li>Ferroli</li>
          <li>Kriger</li>
          <li>Buderus</li>
        </ul>
        <Typography variant="body1" paragraph>
          Вартість обладнання можлива з ПДВ та без ПДВ. Обговорюється та
          підбирається індивідуально до вимог та потреб Замовника.
        </Typography>
      </Box>
    </Container>
  );
};
