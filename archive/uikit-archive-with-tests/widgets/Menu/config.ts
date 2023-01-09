import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
  SOLDOUT: <LinkStatus>{
    text: "SOLD OUT",
    color: "failure"
  }
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://app.soy.finance",
      },
      {
        label: "Liquidity",
        href: "https://app.soy.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.SOON,
  },
  {
    label: "Staking Pools",
    sublabel: "Callisto chain only",
    icon: "PoolIcon",
    href: "/pools",
  },
  {
    label: "Launchpads",
    icon: "LaunchpadIcon",
    href: "/launchpad",
    status: status.SOON,
  },
  {
    label: "Bridge",
    icon: "BridgeIcon",
    href: "https://callistobridge.netlify.app/",
    status: status.SOON,
  },
  {
    label: "IDO",
    icon: "IDOIcon",
    href: "/ido",
    status: status.SOON,
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
    status: status.SOON,
  },
  {
    label: "Info",
    icon: "InfoIcon",
    href: "/info",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/SoyFinance/soyfinance-swap",
      },
      {
        label: "Docs",
        href: "https://callisto.network/",
      },
      {
        label: "Blog",
        href: "https://callisto.network/blog/",
      },
    ],
  },
];

export const socials = [
  /*{
    label: "Home",
    icon: "HomeIcon",
    href: "https://soy.finance/",
  },*/
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/Soy_Finance",
      },
      {
        label: "Pусский",
        href: "https://t.me/Soy_Finance_Ru",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Soy_Finance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 60;
