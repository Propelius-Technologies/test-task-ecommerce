// footer links
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FaxIcon from "@mui/icons-material/Fax";
import { BuyCardType } from "@/components/card/BuyCard";
import { assets } from "@/assets";

export const categories = [
  { name: "Women's Fashion", id: 1 },
  { name: "Mens Fashion", id: 2 },
  { name: "Kids Fashion", id: 3 },
  { name: "Featured", id: 4 },
];

export const storeInfo = [
  {
    name: "Demo Store India 345-659",
    id: 1,
    link: "#",
    Icon: PlaceIcon,
  },
  { name: "123-456-7898", id: 2, link: "#", Icon: CallIcon },
  { name: "demo@demo.com", id: 3, link: "#", Icon: EmailIcon },
  { name: "1234567890", id: 4, link: "#", Icon: FaxIcon },
];

export const socialLinks = [
  { Icon: FacebookIcon, id: 1, link: "https://www.facebook.com/" },
  { Icon: TwitterIcon, id: 2, link: "https://twitter.com/" },
  { Icon: LinkedInIcon, id: 3, link: "https://linkedin.com/" },
  { Icon: PinterestIcon, id: 4, link: "https://pinterest.com/" },
];

export const buyProduct: BuyCardType[] = [
  {
    id: 1,
    title: "Lorem, ipsum dolor.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae atque dolorem.",
    image: assets.images.HOME_COL_ONE.src,
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae atque dolorem.",
    image: assets.images.HOME_COL_TWO.src,
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae atque dolorem.",
    image: assets.images.HOME_COL_THREE.src,
  },
];
