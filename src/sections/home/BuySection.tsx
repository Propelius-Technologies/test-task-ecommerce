import { BuyCard } from "@/components/card";
import Section from "@/components/section";
import { buyProduct } from "@/constant";
import { Grid, Stack } from "@mui/material";

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
            px: { xs: 0, sm: 10, md: 25 },
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
        <Grid container spacing={4} justifyContent={"center"}>
          {buyProduct.map((_) => (
            <Grid item xs={12} sm={6} md={4} key={_.id}>
              <BuyCard {..._} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
};

export default BuySection;
