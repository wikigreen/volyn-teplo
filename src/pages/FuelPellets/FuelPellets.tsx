import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

import pelletes from "../../assets/pelletes.png";
import pelletesP from "../../assets/pelletesP.png";
import pelletesL from "../../assets/pelletesL.png";

export const FuelPellets: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Пелета паливна
        </Typography>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "350px",
            float: "left",
            marginRight: 2,
            marginBottom: 1,
          }}
          alt={"chips"}
          src={pelletes}
        />
        <Typography variant="body1" paragraph>
          У пошуках стійких та екологічно чистих енергетичних рішень паливні
          пелети стали беззаперечним лідером, що надає вагомі аргументи для їх
          вибору замість традиційних видів палива. Отримані з відновлюваних
          джерел біомаси, деревні гранули набули популярності завдяки численним
          перевагам, починаючи від екологічних переваг і закінчуючи практичним
          застосуванням.
        </Typography>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "350px",
            float: "right",
            marginRight: 2,
            marginBottom: 1,
          }}
          alt={"chips"}
          src={pelletesP}
        />
        <Typography variant="body1" paragraph>
          Паливні пелети вирізняються високою енергоефективністю, що робить їх
          конкурентоспроможним і привабливим джерелом енергії у порівнянні з
          іншими видами палива, такими як вугілля, нафта, природний газ і
          традиційні дрова. Виробничий процес передбачає стиснення матеріалів
          біомаси в щільні гранули, що призводить до отримання палива з високою
          щільністю енергії. Це означає, що менший об’єм пелет може генерувати
          більше тепла порівняно з іншими видами палива, такими як дрова або
          традиційна біомаса.
        </Typography>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "350px",
            float: "left",
            marginRight: 2,
            marginBottom: 1,
          }}
          alt={"chips"}
          src={pelletesL}
        />
        <Typography variant="body1" paragraph>
          Ціна Договірна, можливо з ПДВ та без ПДВ.
        </Typography>
      </Box>
    </Container>
  );
};
