import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent, Container, Divider } from "@mui/material";

export const Engineering: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ py: 6, display: "flex", flexDirection: "column", rowGap: "3rem" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Інжинірингові послуги
        </Typography>
        <Typography variant="body1" paragraph>
          Наша компанія надає комплекс інжинірингових послуг, який включає:
        </Typography>
        <Divider />
      </Box>

      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            fontWeight={"bold"}
            align="left"
          >
            Технічні дослідження і послуги
          </Typography>
          <Divider />
          <Typography variant="body1" paragraph align="left">
            Проведення передпроектних робіт, наукових досліджень і розробок,
            складання технічних завдань і техніко-економічних обґрунтувань
            будівництва енергетичних, промислових і інших об'єктів, проведення
            інженерно-дослідницьких робіт для будівництва об'єктів, розробка
            технічної документації, проектування і конструкторське пророблення
            об'єктів техніки і технології.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            fontWeight={"bold"}
            align="left"
          >
            Загальне технічне сприяння
          </Typography>
          <Divider />
          <Typography variant="body1" paragraph align="left">
            Забезпечує оптимальний процес виробництва на об'єкті, включаючи
            консультації й авторський нагляд за устаткуванням, консультації
            економічного і фінансового характеру, кон'юнктурні і маркетингові
            дослідження, консультації по впровадженню систем інформаційного
            забезпечення тощо.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
