import React, { Fragment, useState, useEffect } from 'react'
import { Content } from './Content'
import { Welcome } from './Welcome'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TerminalIcon from '@mui/icons-material/Terminal'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import simshouse from './simshouse.jpg'
import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material'

export const Menu = ({ style }) => {
  const [menuItems, setMenuItems] = useState({})
  const [activeItem, setActiveItem] = useState()
  const menuContent = {
    '0000000001': {
      id: '0000000001',
      title: 'The Sims 4 CC Build Mode',
      content: ['This is the content related to The Sims 4 Build Mode.'],
      links: ['The Gallery', 'Custom Content', 'Mods'],
      icon: <SportsEsportsIcon />,
      image: simshouse,
    },
    '0000000002': {
      id: '0000000002',
      title: 'The Sims 4 CC Assecories',
      content: ['This is the content related to The Sims 4 Build Mode.'],
      links: ['Patterns', 'Ravelry'],
      icon: <FavoriteIcon />,
      image: simshouse,
    },
    '0000000003': {
      id: '0000000003',
      title: 'About me',
      content: ['About me.'],
      links: ['GitHub', 'LinkedIn'],
      icon: <TerminalIcon />,
      image: simshouse,
    },
  }
  useEffect(() => {
    setMenuItems(menuContent)
  }, [])
  return (
    <Fragment>
      <Card style={style}>
        <CardContent>
          <Welcome />
          <List>
            {Object.keys(menuItems).map((key) => {
              return (
                <ListItemButton key={key} onClick={() => setActiveItem(key)}>
                  <ListItemIcon>{menuItems[key].icon}</ListItemIcon>
                  <ListItemText primary={menuItems[key].title} />
                </ListItemButton>
              )
            })}
          </List>
          {menuItems[activeItem] && (
            <Content
              key={activeItem}
              content={menuItems[activeItem].content}
              links={menuItems[activeItem].links}
              image={menuItems[activeItem].image}
              title={menuItems[activeItem].title}
            />
          )}
          <Typography style={{ marginTop: '1rem' }} color='#ac4c79'>
            You can contact me at: sandra@studiofarg.com
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  )
}
