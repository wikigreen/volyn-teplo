import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export const GasTurbines: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Газотурбінні установки
        </Typography>
        <Typography variant="body1" paragraph>
          Газотурбінна електростанція - теплова електростанція, в якій, для
          приведення в рух електричного генератора, використовується газова
          турбіна (тепловий двигун безперервної дії, в апараті лопаток якого -
          енергія стислого і нагрітого газу перетворюється в механічну роботу на
          валу).
        </Typography>
        <Typography variant="body1" paragraph>
          Ми пропонуємо широкий вибір обладнання від 0,1 МВт до 5 МВт
          вітчизняного та імпортного виробництва.
        </Typography>
        <Typography variant="body1" paragraph>
          Основні переваги енергоустановок:
        </Typography>
        <List>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText
              primary="Можливість монтажу в капітальних спорудах (реконструкція існуючих) і
            на відкритих майданчиках (блочно-модульний варіант)"
            />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText
              primary="Мобільність, можливість установки в безпосередній близькості від
            споживача або джерела газу"
            />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText
              primary="Блочно-модульна конструкція дозволяє проводити встановлення та
            ремонт обладнання на обмеженій площі"
            />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText
              primary="Можливість швидкого відключення і запуску газотурбо-генераторної
            частини установки протягом 15-45 хвилин"
            />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="Мінімальна чисельність обслуговуючого персоналу" />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          Раді будемо підібрати для Вас оптимальне рішення. Вартість обладнання
          можлива з ПДВ та без ПДВ. Обговорюється та підбирається індивідуально
          до вимог та потреб Замовника.
        </Typography>
      </Box>
    </Container>
  );
};
