import './../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BusinessIcon from '@material-ui/icons/Business';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HouseIcon from '@material-ui/icons/House';
import ReceiptIcon from '@material-ui/icons/Receipt';
const drawerWidth = 240;

export default function MainDrawer(){
    const classes = useStyles();

    return(
            <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Accounts', 'Budgets', 'Assets', 'Liabilities', 'Investments'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{text === 'Investments' ? <AccountBalanceIcon /> : text === 'Accounts' ? <AttachMoneyIcon/> : text === 'Assets' ? <PaymentIcon/> : text === 'Budgets' ? <ReceiptIcon/> : <HouseIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Markets', 'Trending', 'News'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{text === 'Trending' ? <TrendingUpIcon /> : text === 'Markets' ? <BusinessIcon/> : <AnnouncementIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
    
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));