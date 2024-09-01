import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export const WaterHeaters: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Водопідігрівачі конденсаційні
        </Typography>
        <Typography variant="body1" paragraph>
          ВПК (водопідігрівач конденсаційний) є реалізацією енергозберігаючої
          технології слугує для відбору та перетворення скидної теплової енергії
          від газоподібного носія до теплоносія водяного стану. Використовується
          для підігріву або охолодження повітря як в офісних так і виробничих
          приміщеннях.
        </Typography>
        <Typography variant="body1" paragraph>
          ВПК може комплектуватися системою автоматики, яка забезпечить роботу
          установки в автоматичному режимі, та створить комфортні умови роботи
          для Ваших співробітників.
        </Typography>
        <Typography variant="body1" paragraph>
          До Вашої уваги представлені наступні моделі:
        </Typography>
        <List>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="ВПК 100 теплопродуктивністю 100 КВт/год" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="ВПК 200 теплопродуктивністю 200 КВт/год" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="ВПК 300 теплопродуктивністю 300 КВт/год" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="ВПК 400 теплопродуктивністю 400 КВт/год" />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          Вартість обладнання можлива з ПДВ та без ПДВ. Обговорюється та
          підбирається індивідуально до вимог та потреб Замовника.
        </Typography>
      </Box>
    </Container>
  );
};
