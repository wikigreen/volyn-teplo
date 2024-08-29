import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";

export const Projecting: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Проектні
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
          <ListItem>
            <ListItemText primary="- оптимізацію рівня капіталовкладень;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="- високу якість надання послуг;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="- максимізацію кількості послуг з розумною собівартістю;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="- швидке повернення інвестицій." />
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
