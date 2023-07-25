import { Box, Stack } from "@mui/material";

const BuyCard = () => {
  return (
    <Stack
      sx={{
        height: { xs: "400px", md: "500px" },
        cursor: "pointer",
      }}
      justifyContent={"end"}
      gap={2}
    >
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae
        atque dolorem.
      </p>
    </Stack>
  );
};

export default BuyCard;
