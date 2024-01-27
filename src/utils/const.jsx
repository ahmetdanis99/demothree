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
    Dimensions: "130 x 150 x 39cm",
    pColor: "Noce – Parlak Lake Beyazı",
    Garanti: "7 Yıl",
  },
  {
    id: "01HMYT5KZPQ7C5CWXP13FX8KB1",
    title: "Masa",
    modelComponent: <Desk />,
    qrCode: <Deskqrf />,
    Dimensions: "120 x 77 x 60cm",
    pColor: "Siyah",
    Garanti: "7 Yıl",
  },
  {
    id: "01HN1GQE90G6GF0YRK6H202Y5M",
    title: "Koltuk",
    modelComponent: <Armchair />,
    qrCode: <Armchairqrf />,
    Dimensions: "68 x 118,5 - 128,5 x 70cm",
    pColor: "Siyah",
    Garanti: "2 Yıl",
  },
];
