import React, { ReactNode, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Grid,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
const data8 = {
  "New": [
   {
     img: "https://images.ctfassets.net/5de70he6op10/2357qdj7DEFGasAKCk9tIo/30f2d00fd702d439b50b5f9141fc855c/121322_Upto50Off_SelectGifting_OutCatTile.jpg?w=546&q=80&fm=webp",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130573040021_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Stella Nova Embellished One-Shoulder Dress",
     price: "$ 425.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115657990006_005_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mare Mare x Anthropologie Sequin Bomber Jackets",
     price: "$ 178 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123464030052_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Hucth Sequin Jumpsuit",
     price: "$ 248.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Kari wide-Leg Pants",
     price: "$68.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Lack-Sleeve Sweater",
     price: "$128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Varle Vine Half-Zip Pullover",
     price: "$158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "The Marais Printed Chiffon Maxi Dress ",
     price: "$180.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mono River Fringed Sweater Dress",
     price: "$114.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "T.La Puff Sleeve Tired Dress",
     price: "$98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Maeve Parachute Pants",
     price: "$148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mave Back-Bow Sweater Tank ",
     price: "$88.00",
   },
  ],
 
  "New Today": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/62656665_031_d10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "BHLDN Dylan Satin Charmeuse Dress",
     price: "$ 248.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/63828024_048_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "BHLDN Ruby Satin Charmeuse Dress",
     price: "$ 220.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/62548623_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "BHLDN Cali Satin Charmeuse Midi Dress",
     price: "$ 168.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/69274678_014_b1?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "BHLDN Remy Satin Charmeuse Dress",
     price: "$ 248.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Kari wide-Leg Pants",
     price: "$68.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Lack-Sleeve Sweater",
     price: "$128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Varle Vine Half-Zip Pullover",
     price: "$158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "The Marais Printed Chiffon Maxi Dress ",
     price: "$180.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mono River Fringed Sweater Dress",
     price: "$114.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "T.La Puff Sleeve Tired Dress",
     price: "$98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Maeve Parachute Pants",
     price: "$148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mave Back-Bow Sweater Tank ",
     price: "$88.00",
   },
  ],
  "New This Week": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113086690097_068_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "The Alani Cashmere Mock-Neck Sweater",
     price: "$ 148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80076136_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Sanctuary V-Wire Mini Cover-Up Dress",
     price: "$ 85.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/69607877_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Desmond & Dempsey Bandana Short Set",
     price: "$ 228 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Maeve Hourglass Cardigan Sweater",
     price: "$ 168.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Kari wide-Leg Pants",
     price: "$68.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Lack-Sleeve Sweater",
     price: "$128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Varle Vine Half-Zip Pullover",
     price: "$158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "The Marais Printed Chiffon Maxi Dress ",
     price: "$180.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mono River Fringed Sweater Dress",
     price: "$114.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "T.La Puff Sleeve Tired Dress",
     price: "$98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Maeve Parachute Pants",
     price: "$148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mave Back-Bow Sweater Tank ",
     price: "$88.00",
   },
  ],
  "Dresses": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/81291205_068_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Printedfress Long-Selvee Heart Sleep Sat",
     price: "$ 158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/68492040_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Seafolly Cabana Shoulder-Tei Mini Dress",
     price: "$ 138.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130732510038_028_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "En Saison Puff-Sleeve Babydoll Dress",
     price: "$ 124.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Maeve Hourglass Cardigan Sweater",
     price: "$ 168.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Kari wide-Leg Pants",
     price: "$68.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Lack-Sleeve Sweater",
     price: "$128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Varle Vine Half-Zip Pullover",
     price: "$158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "The Marais Printed Chiffon Maxi Dress ",
     price: "$180.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mono River Fringed Sweater Dress",
     price: "$114.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "T.La Puff Sleeve Tired Dress",
     price: "$98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Maeve Parachute Pants",
     price: "$148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mave Back-Bow Sweater Tank ",
     price: "$88.00",
   },
  ],
  "Jackets": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115657990006_005_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mare Mare X Bomber Jackets",
     price: "$ 178.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115237430036_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Greylin Kint Shirt Jackets",
     price: "$ 117.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4133402250064_020_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Eberjey Printed Pajama Set",
     price: "$ 148 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Avec Les Fille Faux Coat",
     price: "$ 248.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4133445000035_020_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Unreal Fur x Linda Puna Jackets",
     price: "$479.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115687810002_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Ollari Tweet Blazer",
     price: "$198.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115054590064_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "BLANKNYC Perfect Night Faux Leather Jackets",
     price: "$168.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78828522_028_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Beyond Yoga Braves The Elements Sherpa Bomer ",
     price: "$169.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4133293120015_001_c2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Berando Plus Quilted Jackets",
     price: "$159.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4133402250078_045_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Avec les Filles Faux Leather Puffer Vest",
     price: "$99.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115259830010_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Bella Dahi Sherpa-Lined Faux Leather Jackets",
     price: "$363.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/69128304_059_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Free People Movement Rocky Ridge Pullover Sweater",
     price: "$168.00",
   },
  ],
  "Jeans": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122831920140_091_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Pilcore Pull-On Flare Jeans",
     price: "$ 98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122927100050_091_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Good American Good legs Crop Mini Boot Jeans",
     price: "$ 117.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122261180556_092_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mother The Insider High-Rise Jeans ",
     price: "$ 278 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122261180541_092_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Mother The High Waisted Smokin Double Heel Jeans",
     price: "$ 268.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122937600019_091_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "rag & bone Andi High-Rise Wide-Leg Jeans",
     price: "$255.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122057270476_091_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Paige Manhattan High-Rise Bootcut Jeans",
     price: "$219.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122225550600_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "AGOLDE Riley High-Rise Straight Crop Jeans",
     price: "$188.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122261180562_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "MOTHER The Hustler Roller Heel Jeans",
     price: "$288.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122941520024_001_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Frame Le Palazzo Sateen Jeans",
     price: "$278.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122941520044_092_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Frame Le High Straight Jeans",
     price: "$288.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122261180563_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "MOTHER The Hustler Roller Heel Jeans",
     price: "$268.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4122929840012_093_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Favorite Daughter Valentina Tower High-Rise Jeans",
     price: "$198.00",
   },
  ],
  "Jumpsuits": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123464030052_000_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Hutch Sequin Jumpsuit",
     price: "$ 248.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78270386_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Free People Movement Releve One-Piece Bodysuit",
     price: "$ 128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/76038421_020_b2?$an-category$&qlt=80&fit=constrain",
     title: "Free People Movement Releve One-Piece Bodysuit",
     price: "$ 148 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/79994067_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie V-Neck Jumpsuit",
     price: "$ 118.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80233208_031_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie V-Neck Jumpsuit",
     price: "$479.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4115687810002_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie V-Neck Jumpsuit",
     price: "$88.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80249758_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Daily Practice by Anthropologie V-Neck Jumpsuit",
     price: "$128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78542370_081_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie Lounge Around Jumpsuit ",
     price: "$98.00",
   },
  ],
  "Pants": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78570066_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Electric & Rose Icon Joggers",
     price: "$ 168.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/64208986_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beyond Yoga Velvet High-Waisted Midi Legging",
     price: "$ 99.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/79559456_024_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Sweaty Betty Fairisle Base Layer Leggings",
     price: "$ 118 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80606445_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Spiritual Gangster Intent High-Waisted Tech Leggings",
     price: "$ 98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80434772_045_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beach Riot Piper Leggings",
     price: "$108.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80580038_006_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beach Riot Ayla Leggings",
     price: "$108.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78589355_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "PE Nation Radical Track Pants",
     price: "$159.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78828282_009_b2?$an-category$&qlt=80&fit=constrain",
     title: "Beyond Yoga Braves The Elements Sherpa Pants ",
     price: "$169.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78828399_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beyond Yoga Spacedye Commuter Midi Joggers",
     price: "$118.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/62791934_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beyond Yoga Heather Ribbed Midi Joggers",
     price: "$110.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/65989519_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beyond Yoga Lift Your Spirits Sports Bra",
     price: "$60.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4123942140003_081_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Exquise Paperbag Wide-Leg Pants",
     price: "$198.00",
   },
  ],
 
  "Shorts": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80434871_064_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beach Riot Glitter Bike Shorts",
     price: "$ 88.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/67162057_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Splits59 Venus High-Waisted Rigor Skort",
     price: "$ 124.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80490774_260_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "Beach Riot Balboa Holiday Glitter Stripe Shorts",
     price: "$ 98 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80490626_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beach Riot Balboa Shorts",
     price: "$ 98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80056955_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "My Beachy Side x Emily In Paris Freesia Beaded Shorts",
     price: "$195.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80835622_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "LSPACE Soul Samba Shorts",
     price: "$95.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4125024090025_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Corey Lynn Calter Tweed Skort",
     price: "$148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/76038256_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Free People Movement Way Home Shine Shorts",
     price: "$40.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/68450725_061_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Free People Movement The Way Home Shorts",
     price: "$30.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4125831920062_027_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie Canvas Shorts",
     price: "$80.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4125652010002_026_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Maeve Tailored Skort",
     price: "$118.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4125831920061_093_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Pilcro The Wanderer Shorts",
     price: "$78.00",
   },
  ],
  "Skirts": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/79517447_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie Tiered Skirt",
     price: "$ 78.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80598147_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Seafolly Marrakesh Skirt",
     price: "$ 188.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78830353_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Beyond Yoga Uptown Velvet Skirt",
     price: "$ 99 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120732510012_062_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "En Saison Lisette Knit Skirt",
     price: "$ 78.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120638570052_099_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Current Air Asymmetrical Tiered Skirt",
     price: "$120.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120347470077_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Geisha Designs Lace Skirt",
     price: "$398.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120464030109_011_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Hutch Front-Slit Micro Mini Skirt",
     price: "$98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120349290022_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Forever That Girl Wrap Skirt ",
     price: "$140.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120646420008_001_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie Ruffled Tulle Midi Skirt",
     price: "$158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120929840006_028_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Favorite Daughter Gwen Midi Skirt",
     price: "$198.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4139019030041_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Essentiel Antwerp Cole Metallic Mini Skirt",
     price: "$235.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4120348690098_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "The Colette Skirt",
     price: "$118.00",
   },
  ],
  "Sweaters": [
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80831720_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "LSPACE Samba Sweater",
     price: "$ 110.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/80224827_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Daily Practice by Anthropologie Hazy Daze Pullover Sweater",
     price: "$ 98.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114356160023_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "By Anthropologie Fringed Colorblock Sweater",
     price: "$ 348 .00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113086690088_025_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Maeve Cashmere Convertible Sweater Set",
     price: "$ 328.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113086690097_068_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",

     title: "The Alani Cashmere Mock-Neck Sweater",
     price: "$148.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113086690023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Maeve Cashmere Intarsia Sweater",
     price: "$180.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Maeve Hourglass Cardigan Sweater",
     price: "$168.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4113212060004_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "DOLAN Sheer-Sleeve Sweater Top",
     price: "$128.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/78660081_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Varley Belgrave Knit Sweater",
     price: "$158.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114611020026_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
     title: "By Anthropologie Embellished Ombre Sweater",
     price: "$198.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114634430007_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Endless Rose Polo Sweater Tee",
     price: "$88.00",
   },
   {
     img: "https://images.urbndata.com/is/image/Anthropologie/4114529100231_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
     title: "Maeve Penguin Cardigan Sweater",
     price: "$168.00",
   },
  ],
 }
const LinkItems = [
  { name: "New" },
  { name: "New Today" },
  { name: "New This Week" },
  { name: "Dresses" },
  { name: "Jackets" },
  { name: "Jeans" },
  { name: "Jumpsuits" },
  { name: "Pants" },
  { name: "Shorts" },
  { name: "Skirts" },
  { name: "Sweaters" },
];

export default function SimpleSidebar({ children }) {
  const [category, setSelectedCategory] = useState("New");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Box
          fontSize="10"
          minH="100vh"
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <SidebarContent
            onClose={() => onClose}
            setSelectedCategory={(category) => setSelectedCategory(category)}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
          </Box>
        </Box>
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Grid templateColumns="repeat(4,22%)" ml="5%" gap="7" mt="40px">
          {data8[category].map((item, i) => (
            <div key={i}>
               
              <div>
                <img src={item.img} />
              </div>
            
              <Text>{item.name}</Text>
              <Text fontSize="12">{item.title}</Text>
              <Text fontSize="12">{item.price}</Text>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, setSelectedCategory, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      //   pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Browse by:
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={()=>setSelectedCategory(link.name)}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          textDecoration: "underline",
          //   color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              textDecoration: "underline",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Browse by:
      </Text>
    </Flex>
  );
};


  

