import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const WoodChips: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Тріска
        </Typography>
        <Typography variant="body1" paragraph>
          Дерев’яна тріска є ефективним і простим з погляду виготовлення
          паливним матеріалом. Вона позиціонується як залишки при виробництві
          пиломатеріалів, які неможливо застосувати в споживчих чи будівельних
          цілях, як основну сировину. Тим не менш, тріска не втрачає своїх
          цінностей під час використання.
        </Typography>
        <Typography variant="body1" paragraph>
          Невисока вартість у зв’язці з високим ККД горіння створює економічно
          вигідні умови для опалення будівель. А можливість одночасно поєднувати
          деревинну тріску з іншими видами палива дозволить коригувати витрати
          по потребам.
        </Typography>
        <Typography variant="body1" paragraph>
          Ціна Договірна, можливо з ПДВ та без ПДВ.
        </Typography>
      </Box>
    </Container>
  );
};
