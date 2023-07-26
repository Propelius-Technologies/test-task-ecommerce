import React from "react";
import { Box, Divider, Drawer } from "@mui/material";
import { Close } from "@mui/icons-material";

interface SidebarProps {
  isOpen: boolean;

  close(): void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, close }) => {
  return (
    <Drawer open={isOpen} onClose={close} anchor={"right"}>
      <Box
        sx={{ width : { xs  : "100vw" , md : "600px"}}}
        role="presentation"
        onClick={close}
        onKeyDown={close}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <h3>Cart</h3>
            <Close sx={{ cursor: "pointer" }} />
          </Box>
          <Divider />
        </Box>
        <Box></Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
