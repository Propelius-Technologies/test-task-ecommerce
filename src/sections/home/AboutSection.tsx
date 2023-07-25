import Section from "@/components/section";
import { Stack } from "@mui/material";
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
            px: { xs: 5, sm: 10, md: 25 },
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
      </Section>
    </>
  );
};

export default AboutSection;
