import Desk from "../models/Desk";
import { TvUnit } from "../models/TvUnit";
import Armchair from "../models/armchair";
import Armchairqr from "../qrcode/Armchairqr";
import Deskqr from "../qrcode/Deskqr";
import Tvunitqr from "../qrcode/Tvunitqr";

export const Products = [
  {
    id: "01HMYC6V959HSMRN76JBV75TYK",
    title: "TV Unitesi",
    modelComponent: <TvUnit />,
    qrCode:<Tvunitqr/>
  },
  {
    id: "01HMYT5KZPQ7C5CWXP13FX8KB1",
    title: "Masa",
    modelComponent: <Desk />,
    qrCode:<Deskqr/>
  },
  {
    id: "01HN1GQE90G6GF0YRK6H202Y5M",
    title: "Koltuk",
    modelComponent: <Armchair />,
    qrCode:<Armchairqr/>
  },
];
