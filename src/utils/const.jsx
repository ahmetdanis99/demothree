import Desk from "../models/Desk";
import ElectricBox from "../models/ElectricBox";
import { TvUnit } from "../models/TvUnit";

export const Products = [
  {
    id: "01HMYC6V959HSMRN76JBV75TYK",
    title: "TV Unitesi",
    modelComponent: <TvUnit />,
  },
  {
    id: "01HMYDFEM3NR60B0WSKD5QP7WE",
    title: "Product2",
    modelComponent: <ElectricBox />,
  },
  {
    id: "01HMYT5KZPQ7C5CWXP13FX8KB1",
    title: "Masa",
    modelComponent: <Desk />,
  },
];
