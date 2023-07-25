import { BuyCard } from "@/components/card";
import Section from "@/components/section";
import { Box, Grid, Stack } from "@mui/material";

const BuySection = () => {
  return (
    <>
      <Section>
        <Stack
          alignItems={"center"}
          textAlign={"center"}
          gap={2}
          mb={4}
          sx={{
            px: { xs: 5, sm: 10, md: 25 },
          }}
        >
          <h2>Welcome to store</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            voluptatibus laborum placeat reiciendis maxime nesciunt?
            Perferendis, reprehenderit doloribus. Pariatur ducimus quod sit
            totam ad provident.
          </p>
        </Stack>
        <Grid container spacing={4}>
          <Grid item sm={12} md={4}>
            <BuyCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <BuyCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <BuyCard />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default BuySection;
