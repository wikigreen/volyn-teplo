import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

import brick from "../../assets/brick.png";
import brickRuf from "../../assets/brickRuf.png";

export const Briquettes: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Брикети
        </Typography>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: { sm: "300px", xs: "100%" },
            float: { sm: "left", xs: "unset" },
            marginRight: 2,
            marginBottom: 1,
          }}
          alt={"chips"}
          src={brick}
        />
        <Typography variant="body1" paragraph>
          Паливні брикети RUF - один з найпоширеніших стандартів паливних
          брикетів. Брикет стандарту RUF (євродрова) виготовляється з тирси на
          гідравлічних пресах під дією високого тиску. Використовуються в якості
          паливо для твердопаливних камінів, печей, котлів. Брикети упаковані в
          пачки масою 9,7 – 10,3 кг. Пачки укладені на піддон. Кількість на
          піддоні – 96 штук (пачок).
        </Typography>
        <Box
          component="img"
          sx={{
            height: "auto",
            width: { sm: "300px", xs: "100%" },
            float: { sm: "right", xs: "unset" },
            marginRight: 2,
            marginBottom: 1,
          }}
          alt={"chips"}
          src={brickRuf}
        />
        <Typography variant="body1" paragraph>
          Паливні брикети Nestro – це ефективний замінник палива, як природній
          газ, дизпаливо, вугілля, тощо. Брикет маленьких розмірів і мало
          важить. Це дозволяє Вам складати їх, як завгодно, транспортувати без
          особливих зусиль.
        </Typography>

        <Typography variant="body1" paragraph>
          Ціна Договірна, можливо з ПДВ та без ПДВ.
        </Typography>
      </Box>
    </Container>
  );
};
