import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const Contacts: FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Контакти
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Юридична адреса:</strong>
          <br />
          Волинська Область, місто Луцьк, вул. Героїв Упа 2г
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Адреса виробництва:</strong>
          <br />
          Волинська Область, Рожищенський район, село Носачевичі
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>e-mail:</strong>
          <br />
          <a href="mailto:volynteplo@gmail.com">volynteplo@gmail.com</a>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>тел.:</strong>
          <br />
          <a href="tel:+380673325192">+38 067 332 51 92</a>
        </Typography>
      </Box>
    </Container>
  );
};
