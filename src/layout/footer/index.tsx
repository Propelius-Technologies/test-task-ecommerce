import Link from "next/link";
import { Box, Grid, Stack } from "@mui/material";
import { categories, socialLinks, storeInfo } from "@/constant";

const Footer = () => {
  return (
    <Box>
      <Box
        py={6}
        sx={{
          background: "#f9f9f9",
        }}
      >
        <div className="container">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Stack gap={2}>
                <div className="logo">
                  <Link href={"/"}>
                    <h3 className="prime-color">ECommerce</h3>
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur dolore vel porro tempora, cupiditate neque
                  deserunt accusantium veritatis
                </p>
                <div>
                  <Box
                    sx={{
                      ul: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 3,
                        li: {
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        },
                      },
                    }}
                  >
                    <ul>
                      {socialLinks?.map(({ id, Icon, link }) => (
                        <li key={id}>
                          <Link href={link}>
                            <Icon />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </div>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={4}>
                  <Stack
                    gap={3}
                    sx={{
                      "& li, a": {
                        cursor: "pointer",
                        marginBottom: "10px",
                        "&:hover": {
                          color: "#ff4c3b",
                        },
                      },
                    }}
                  >
                    <h4>Categories</h4>
                    <ul>
                      {categories?.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Stack
                    gap={3}
                    sx={{
                      "& li, a": {
                        cursor: "pointer",
                        marginBottom: "10px",
                        "&:hover": {
                          color: "#ff4c3b",
                        },
                      },
                    }}
                  >
                    <h4>Categories</h4>
                    <ul>
                      {categories?.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Stack
                    gap={3}
                    sx={{
                      "& li": {
                        cursor: "pointer",
                        marginBottom: "10px",
                      },
                      "& a": {
                        "&:hover": {
                          color: "#ff4c3b",
                        },
                      },
                    }}
                  >
                    <h4>Store information</h4>
                    <ul>
                      {storeInfo?.map(({ id, name, link, Icon }) => (
                        <li
                          key={id}
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Icon />
                          <Link href={link}>{name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box py={2}>
        <Box className="container" textAlign={"center"}>
          <p>@2023 Propelius technology. All rights reserved.</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
