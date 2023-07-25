import { assets } from "@/assets";
import { Box, Stack } from "@mui/material";

export interface BuyCardType {
  id: number;
  title: string;
  content: string;
  image: string;
}

const BuyCard = ({ title, content, image }: BuyCardType) => {
  return (
    <Stack
      sx={{
        background: `url(${image}) no-repeat center center/cover`,
        height: { xs: "400px", md: "500px" },
        justifyContent: "end",
        borderRadius: "10px",
        cursor: "pointer",
        p: 4,
        gap: 2,
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        "&:before": {
          content: "''",
          position: "absolute",
          background: "rgba(0,0,0,0.2)",
          zIndex: -1,
          inset: "0px",
          transition: "all 0.3s",
          height: "0px",
        },
        "&:hover:before": {
          height: "100%",
        },
        h4: {
          color: "white",
          fontWeight: "600",
        },
        ".cart-text": {
          color: "white",
        },
      }}
    >
      <h4>{title}</h4>
      <p className="cart-text">{content}</p>
    </Stack>
  );
};

export default BuyCard;
