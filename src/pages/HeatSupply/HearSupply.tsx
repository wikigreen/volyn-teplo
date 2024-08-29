import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const HearSupply: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Послуги з теплопостачання
        </Typography>
        <Typography variant="body1" paragraph>
          ТОВ «ВОЛИНЬТЕПЛО» займається виробництвом та постачанням теплової
          енергії на території Волинської області. Якщо хочете зв’язатися з нами
          стосовно якості та кількості наданих послуг, виконати звірку
          розрахунків просимо зробити це за контактним номером телефону, або
          написати нам на пошту. Контактну інформацію можна знайти в розділі
          контакти.
        </Typography>
      </Box>
    </Container>
  );
};
