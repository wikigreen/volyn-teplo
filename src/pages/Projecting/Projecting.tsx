import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export const Projecting: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          fontWeight={700}
        >
          Проектні послуги
        </Typography>
        <Typography variant="body1" paragraph>
          Ми здійснюємо проектні роботи, пов'язані зі створенням проектної
          документації для об'єктів будівництва енергетичної сфери; наша
          компанія має у своєму складі відповідних виконавців, що згідно із
          законодавством одержали кваліфікаційний сертифікат, який підтверджує
          спроможність виконання робіт щодо об'єктів відповідного класу.
        </Typography>
        <Typography variant="body1" paragraph>
          В своїй роботі ми використовуємо власний досвід, а також рекомендації
          провідних спеціалістів та виробників обладнання. Правильно
          спроектована та побудована енергетична система забезпечить:
        </Typography>
        <List>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="Оптимізацію рівня капіталовкладень" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="Високу якість надання послуг" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="Максимізацію кількості послуг з розумною собівартістю" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="Швидке повернення інвестицій" />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          Виконані нами проекти враховують сучасний стан та розвиток технологій,
          а також плани розвитку Замовника, що дозволяє йому знизити додаткові
          витрати на модернізацію для впровадження чергових сучасних послуг.
        </Typography>
        <Typography variant="body1" paragraph>
          Підбір та продаж оптимальних енергетичних рішень для Замовника – це
          наше завдання кожного дня!
        </Typography>
      </Box>
    </Container>
  );
};
