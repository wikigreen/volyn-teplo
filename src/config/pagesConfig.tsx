import { NavItemType } from "../type";
import { AboutUs } from "../pages/AboutUs";
import { Engineering } from "../pages/Engineering";
import { Projecting } from "../pages/Projecting";
import { Construction } from "../pages/Construction";
import { HearSupply } from "../pages/HeatSupply";

export const navItems: Record<string, NavItemType> = {
  aboutUs: {
    title: "Про нас",
    component: <AboutUs />,
  },
  services: {
    title: "Послуги",
    child: {
      pelet: {
        title: "Інжинірингові послуги",
        component: <Engineering />,
      },
      breket: {
        title: "Проектні послуги",
        component: <Projecting />,
      },
      triska: {
        title: "Будівельно-монтажні",
        component: <Construction />,
      },
      heatDelivery: {
        title: "Послуги з теплопостачання",
        component: <HearSupply />,
      },
    },
  },
  fuel: {
    title: "Альтернативне паливо",
    child: {
      pelet: { title: "Пелета", component: <h1>Пелета</h1> },
      breket: { title: "Брикет", component: <h1>Брикет</h1> },
      triska: { title: "Тріска", component: <h1>Тріска</h1> },
    },
  },
  equipment: {
    title: "Контакти",
    child: {
      boiler: { title: "Котли", component: <h1>Котли</h1> },
      waterHeater: {
        title: "Водонагрівачі",
        component: <h1>Водонагрівачі</h1>,
      },
      gasTurbine: {
        title: "Газотурбінні установки",
        component: <h1>Газотурбінні</h1>,
      },
    },
  },
  contact: {
    title: "Контакти",
    component: <h1>Контакти</h1>,
  },
};
