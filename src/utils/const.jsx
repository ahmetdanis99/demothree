import Desk from "../models/Desk";
import { TvUnit } from "../models/TvUnit";
import Armchair from "../models/armchair";
import Armchairqrf from "../qrcode/Armchairqrf";
import Deskqrf from "../qrcode/Deskqrf";
import Tvunitqrf from "../qrcode/Tvunitqrf";

export const Products = [
  {
    id: "01HMYC6V959HSMRN76JBV75TYK",
    title: "TV Unitesi",
    modelComponent: <TvUnit />,
    qrCode: <Tvunitqrf />,
  },
  {
    id: "01HMYT5KZPQ7C5CWXP13FX8KB1",
    title: "Masa",
    modelComponent: <Desk />,
    qrCode: <Deskqrf />,
  },
  {
    id: "01HN1GQE90G6GF0YRK6H202Y5M",
    title: "Koltuk",
    modelComponent: <Armchair />,
    qrCode: <Armchairqrf />,
  },
];
