import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export const Construction: FC = () => {
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
          Будівельно-монтажні
        </Typography>
        <Typography variant="body1" paragraph>
          Наша компанія надає повноцінний комплекс дій, які виконуються при
          спорудженні нових об'єктів «під ключ», реконструкції раніше введених в
          експлуатацію приміщень або капітального ремонту старих будівель та
          обладнання. Ми маємо власну спец техніку та будівельне обладнання,
          завжди готові до виконання складних завдань.
        </Typography>
        <Typography variant="body1" paragraph>
          Всі будівельні роботи можна розділити на загально будівельні і
          спеціалізовані. До загально будівельних процесів входять земляні,
          бетонні, кам'яні роботи, монтаж металевих конструкцій та ін. До
          спеціалізованих будівельних робіт відносять санітарно-технічні і
          електромонтажні роботи. Також монтажні роботи включають в себе
          встановлення спеціалізованого обладнання, антенно-фідерного обладнання
          мобільного зв'язку, контрольно-вимірювальної апаратури та ін.
        </Typography>
        <Typography variant="body1" paragraph>
          Основні етапи по зведенню будівлі чи споруди для нашої компанії є:
        </Typography>
        <List>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="земляні роботи включають риття котлованів і траншей, вивезення ґрунту, вертикальне планування та інші основоположні процеси" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="бетонні роботи (монтаж опалубки, армування, бетонування конструкцій)" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="монтаж металевого каркасу (монтаж колон та балочних клітин будівель, монтаж металевих башт, стовпів та щогл)" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="кам'яні роботи (зведення стін і перегородок, облицювання стін)" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="покрівельні роботи" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="влаштування технологічного обладнання та інженерних мереж" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="оздоблювальні роботи" />
          </ListItem>
          <ListItem sx={{ gap: "1rem" }}>
            <AdjustIcon fontSize={"small"} sx={{ width: "fitContent" }} />
            <ListItemText primary="прибирання будівельного майданчика та вивезення сміття" />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          На кожному етапі будівництва, від проектування будівлі до її зведення,
          потрібно дотримуватися встановлених будівельних норм і правил. Це
          стосується не тільки всього процесу будівництва, але і заходів по
          введенню споруди в експлуатацію після закінчення всіх
          будівельно-монтажних робіт. Важливо правильно вибрати підрядника, який
          буде контролювати всі процеси на будівельному майданчику та залучить
          до роботи кваліфікованих спеціалістів, що якісно виконуватиме весь
          спектр робіт.
        </Typography>
      </Box>
    </Container>
  );
};
