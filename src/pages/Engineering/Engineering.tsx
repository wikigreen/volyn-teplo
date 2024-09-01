import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider } from "@mui/material";
import { TextCard } from "../../components/TextCard";

export const Engineering: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ py: 6, display: "flex", flexDirection: "column", rowGap: "3rem" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          fontWeight={700}
        >
          Інжинірингові послуги
        </Typography>
        <Typography variant="body1" paragraph>
          Наша компанія надає комплекс інжинірингових послуг, який включає:
        </Typography>
        <Divider />
      </Box>

      <TextCard title={"Технічні дослідження і послуги"}>
        Проведення передпроектних робіт, наукових досліджень і розробок,
        складання технічних завдань і техніко-економічних обґрунтувань
        будівництва енергетичних, промислових і інших об'єктів, проведення
        інженерно-дослідницьких робіт для будівництва об'єктів, розробка
        технічної документації, проектування і конструкторське пророблення
        об'єктів техніки і технології.
      </TextCard>

      <TextCard title={"Загальне технічне сприяння"}>
        Забезпечує оптимальний процес виробництва на об'єкті, включаючи
        консультації й авторський нагляд за устаткуванням, консультації
        економічного і фінансового характеру, кон'юнктурні і маркетингові
        дослідження, консультації по впровадженню систем інформаційного
        забезпечення тощо.
      </TextCard>
    </Container>
  );
};
