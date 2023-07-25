import { assets } from "@/assets";
import Section from "@/components/section";
import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
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
          <h2>Who we are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            voluptatibus laborum placeat reiciendis maxime nesciunt?
            Perferendis, reprehenderit doloribus. Pariatur ducimus quod sit
            totam ad provident.
          </p>
        </Stack>
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "70%",
                borderRadius: "10px",
                img: {
                  objectFit: "cover",
                  borderRadius: "10px",
                },
              }}
            >
              <Image src={assets.images.ABOUT_IMAGE} alt={"about us"} fill />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack gap={4}>
              <h3>About us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                odit explicabo ad hic, quas, consectetur quia, dolorem libero
                amet modi expedita aliquam aliquid numquam similique delectus
                sint sequi impedit? Itaque ad aut ducimus facere. Architecto
                vero rerum modi! Facilis mollitia molestiae inventore aliquam
                qui quod provident ipsum, suscipit numquam dolores debitis velit
                esse quia maxime ipsam.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                ducimus nulla deserunt consequatur voluptates. Ex itaque fugiat
                quibusdam reprehenderit commodi labore quidem porro animi?
                Dolorum, cupiditate debitis! Maxime dolore reiciendis
                consectetur incidunt fugit commodi possimus!
              </p>
            </Stack>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default AboutSection;
