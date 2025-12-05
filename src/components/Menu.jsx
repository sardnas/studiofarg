import React, { Fragment, useState, useEffect } from "react";
import { Content } from "./Content";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TerminalIcon from "@mui/icons-material/Terminal";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

const menuContent = {
  "0000000001": {
    id: "0000000001",
    title: "The Sims 4 CC Build Mode",
    content: ["This is the content related to The Sims 4 Build Mode."],
    links: ["Some link here", "Another link"],
    icon: <SportsEsportsIcon sx={{ color: "secondary.main" }} />,
  },
  "0000000002": {
    id: "0000000002",
    title: "The Sims 4 CC Accessories",
    content: ["This is the content related to The Sims 4 CAS."],
    links: ["Some link here", "Another link"],
    icon: <FavoriteIcon sx={{ color: "secondary.main" }} />,
  },
  "0000000003": {
    id: "0000000003",
    title: "The Sims 4 Animations",
    content: ["This is the content related to The Sims 4 Animations."],
    links: ["Some link here", "Another link"],
    icon: <TerminalIcon sx={{ color: "secondary.main" }} />,
  },
  "0000000004": {
    id: "0000000004",
    title: "About me",
    content: ["About me."],
    links: ["Some link here", "Another link"],
    icon: <TerminalIcon sx={{ color: "secondary.main" }} />,
  },
};

export const Menu = () => {
  const [menuItems, setMenuItems] = useState({});
  const [activeItem, setActiveItem] = useState();
  useEffect(() => {
    setMenuItems(menuContent);
  }, []);
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant="h1">Menu</Typography>
          <List>
            {Object.keys(menuItems).map((key) => {
              return (
                <ListItemButton key={key} onClick={() => setActiveItem(key)}>
                  <ListItemIcon>{menuItems[key].icon}</ListItemIcon>
                  <ListItemText primary={menuItems[key].title} />
                </ListItemButton>
              );
            })}
          </List>
          {menuItems[activeItem] && (
            <Content
              key={activeItem}
              content={menuItems[activeItem].content}
              links={menuItems[activeItem].links}
              title={menuItems[activeItem].title}
            />
          )}
          <Typography style={{ marginTop: "1rem" }}>
            You can contact me at: sandra@studiofarg.com
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};
