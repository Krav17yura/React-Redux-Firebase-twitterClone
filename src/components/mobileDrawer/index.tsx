import React from "react";
import {
    Avatar,
    Box, Divider,
    Drawer, Icon,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import BarChartIcon from "@material-ui/icons/BarChart";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SpeedIcon from "@material-ui/icons/Speed";
import BrushIcon from "@material-ui/icons/Brush";

import {useStyleMobileDrawer} from "./style";

interface IMobileDrawerProps{
    isOpen?: boolean,
    toggleDrawer: (e: React.MouseEvent) => void
}

export const MobileDrawer: React.FC<IMobileDrawerProps> = ({isOpen= false, toggleDrawer}: IMobileDrawerProps) => {
    const classes = useStyleMobileDrawer();
    return(
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            keepMounted={true}
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer}
        >
            <div
                role="presentation"
            >
                <Box className={classes.drawerHeader}>
                    <Typography color={"secondary"} variant={'h6'}>
                        Сведения об учетной записи
                    </Typography>
                    <IconButton color={"primary"} onClick={toggleDrawer}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <List className={classes.drawerBody}>
                    <ListItem className={classes.drawerUserAccount}>
                        <ListItemAvatar>
                            <Avatar src='https://avatars0.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'/>
                        </ListItemAvatar>
                        <IconButton size={'small'}>
                            <AddCircleOutlineOutlinedIcon color={"primary"} fontSize={"large"}/>
                        </IconButton>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Юра" secondary="@KjOqW4on4cUf7xT"/>
                    </ListItem>
                    <ListItem className={classes.drawerUserAccountInfo}>
                        <Typography>
                            <Box component={"span"}>0</Box> в читаемых
                        </Typography>
                        <Typography>
                            <Box component={"span"}>0</Box> читателей
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <PersonOutlineIcon/>
                        </Icon>
                        <Typography>Профиль</Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <ListAltIcon/>
                        </Icon>
                        <Typography>Списки</Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <ColorLensIcon/>
                        </Icon>
                        <Typography>Темы</Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <BookmarkBorderIcon/>
                        </Icon>
                        <Typography>Закладки</Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <FlashOnIcon/>
                        </Icon>
                        <Typography>Моменты</Typography>
                    </ListItem>
                    <Divider component="li"/>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <SystemUpdateAltIcon/>
                        </Icon>
                        <Typography>Реклама в твиттере</Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <BarChartIcon/>
                        </Icon>
                        <Typography>Аналитика</Typography>
                    </ListItem>
                    <Divider component="li"/>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <SettingsIcon/>
                        </Icon>
                        <Typography>Настройки и конфиденциальность</Typography>
                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <HelpOutlineIcon/>
                        </Icon>
                        <Typography>Справочный центр</Typography>
                    </ListItem>
                    <Divider component="li"/>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <SpeedIcon/>
                        </Icon>
                        <Typography>Экономия трафика</Typography>

                    </ListItem>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Icon>
                            <BrushIcon color={"primary"}/>
                        </Icon>
                        <Typography>Оформление</Typography>
                    </ListItem>
                    <Divider component="li"/>
                    <ListItem className={classes.drawerListMenuItem}>
                        <Typography>Выйти</Typography>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}
