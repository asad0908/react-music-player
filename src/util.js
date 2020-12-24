import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://images.vailresorts.com/image/upload/ar_4:3,c_fill,dpr_3.0,f_auto,g_auto,q_auto/v1/Beaver%20Creek/Products/2020%20Winter%20Pre-sized%20Images/Heroes/Scenics/Tier%203%20Scenic%20Heroes/20181223_BC_Bowlin_001_3840x1200.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://img.mi9.com/landscape/5088/beautiful-summer-2012-daylight_1920x1200_97044.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#ef8ea9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/song-cover-video-keep-going-animation-design-template-ce534df28ba33b08e47955b8c12d8d88_screen.jpg?ts=1591430578",
      artist: "SwOrn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#cd607d", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://bloximages.newyork1.vip.townnews.com/dailynebraskan.com/content/tncms/assets/v3/editorial/7/c0/7c0e744a-3b3a-11ea-8b16-7b0e39cc958d/5e2527e1645e7.image.jpg?resize=400%2C400",
      artist: "Aiguilli",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#ef8ea9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover: "https://i.ytimg.com/vi/paGUy2LTl4w/hqdefault.jpg",
      artist: "swOrn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#cd607d", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://i.pinimg.com/originals/b6/5d/dc/b65ddcc8d12b2d1397abf8ee7952e052.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazz Cabbage",
      cover: "https://f4.bcbits.com/img/a1775206490_10.jpg",
      artist: "Ian Ewing, Strehlow",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
      color: ["#ba4a46", "#4df0dd"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lagoons",
      cover: "https://f4.bcbits.com/img/a1775206490_10.jpg",
      artist: "Strehlow, Chris Mazuera",
      color: ["#ba4a46", "#4df0dd"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
      id: uuidv4(),
      active: false,
    },
  ];
};

export default chillHop;
