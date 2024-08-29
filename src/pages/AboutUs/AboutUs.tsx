import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const AboutUs: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Про нас
        </Typography>
        <Typography variant="body1" paragraph>
          ТОВ "Волиньтепло" успішно працює на ринку альтернативного палива та
          енергії з 2011 року. Спеціалізуємося на виготовленні та продажу
          паливних гранул, тріски та брикетів для різних видів твердопаливних
          котлів. А також займається виробництвом та торгівлею енергогенеруючого
          обладнання. Поставки від виробника по території України та за кордон.
          Готуємо повний пакет документів для митного оформлення.
        </Typography>
      </Box>
    </Container>
  );
};
