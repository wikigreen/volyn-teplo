import { NavItemType } from "../type";
import { AboutUs } from "../pages/AboutUs";
import { Engineering } from "../pages/Engineering";
import { Projecting } from "../pages/Projecting";
import { Construction } from "../pages/Construction";
import { HeatSupply } from "../pages/HeatSupply";
import { FuelPellets } from "../pages/FuelPellets";
import { Briquettes } from "../pages/Briquettes";
import { WoodChips } from "../pages/WoodChips";
import { Boilers } from "../pages/Boilers";
import { WaterHeaters } from "../pages/WaterHeaters";
import { GasTurbines } from "../pages/GasTurbines";
import { Contacts } from "../pages/Contacts";

export const navItems: Record<string, NavItemType> = {
  aboutUs: {
    title: "Про нас",
    component: <AboutUs />,
  },
  services: {
    title: "Послуги",
    child: {
      engineering: {
        title: "Інжинірингові послуги",
        component: <Engineering />,
      },
      projecting: {
        title: "Проектні послуги",
        component: <Projecting />,
      },
      construction: {
        title: "Будівельно-монтажні",
        component: <Construction />,
      },
      heatSupply: {
        title: "Послуги з теплопостачання",
        component: <HeatSupply />,
      },
    },
  },
  fuel: {
    title: "Альтернативне паливо",
    child: {
      fuelPellets: { title: "Пелета паливна", component: <FuelPellets /> },
      briquettes: { title: "Брикети", component: <Briquettes /> },
      woodChips: { title: "Тріска", component: <WoodChips /> },
    },
  },
  equipment: {
    title: "Обладнання",
    child: {
      boiler: { title: "Котли", component: <Boilers /> },
      waterHeater: {
        title: "Водонагрівачі",
        component: <WaterHeaters />,
      },
      gasTurbine: {
        title: "Газотурбінні установки",
        component: <GasTurbines />,
      },
    },
  },
  contact: {
    title: "Контакти",
    component: <Contacts />,
  },
};
