import React from 'react'

import {
    Avatar,
    Box,
    Button,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Typography
} from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/SearchRounded";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAltRounded";
import PersonIcon from "@material-ui/icons/PersonOutlineRounded";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import {useStyleSideBar} from "./style";
import {AddTweetModal} from "../addTweetMoadl";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/ducks/auth/selectors";
import {appLogout} from "../../store/ducks/auth/actionCreators";


export const SideBar = () => {
    const classes = useStyleSideBar()
    const [visibleAddTweetModal, setVisibleAddTweetModal] = React.useState<boolean>(false);
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleCloseAddTweetModal = (value: boolean) => (event: React.MouseEvent) => {
        setVisibleAddTweetModal(value)
    }

    const handleLogout = () => {
        dispatch(appLogout())
    }

    return (
        <>
            <List className={classes.sideMenu}>
                <Link to={'/home'}>
                    <ListItem>
                        <ListItemIcon>
                            <IconButton className={classes.sideBarLogoIcon}>
                                <TwitterIcon className={classes.sideBarIcon} color={'secondary'}/>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                </Link>


                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'primary'}
                                startIcon={<HomeIcon/>}>
                            Главная
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <HomeIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'secondary'}
                                startIcon={<SearchIcon/>}>
                            Поиск
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <SearchIcon/>
                        </IconButton>
                    </Hidden>

                </ListItem>
                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'secondary'}
                                startIcon={<NotificationsIcon/>}>
                            Уведомления
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <NotificationsIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'secondary'}
                                startIcon={<MailIcon/>}>
                            Сообщения
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <MailIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'secondary'}
                                startIcon={<BookmarkIcon/>}>
                            Закладки
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <BookmarkIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'secondary'}
                                startIcon={<ListIcon/>}>
                            Списки
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <ListIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
                <ListItem className={classes.sideBarListItem}>
                    <Hidden mdDown>
                        <Button color={'secondary'}
                                startIcon={<PersonIcon/>}>
                            Профиль
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarHiddenButton}>
                            <PersonIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
                <ListItem>
                    <Hidden mdDown>
                        <Button color={'primary'} variant={'contained'} fullWidth
                                onClick={handleCloseAddTweetModal(true)}>
                            <Typography color={"secondary"} variant={'subtitle2'}>
                                Твитнуть
                            </Typography>
                        </Button>
                    </Hidden>

                    <Hidden lgUp>
                        <IconButton color={'secondary'} className={classes.sideBarAddTwittButton}
                                    onClick={handleCloseAddTweetModal(true)}>
                            <CreateIcon/>
                        </IconButton>
                    </Hidden>
                </ListItem>
            </List>
            <Box className={classes.sideBarUserAccountBlock}>
                <Hidden mdDown>
                    <Button color={'secondary'} className={classes.sideBarUserAccountButton}
                            startIcon={<Avatar src={typeof (user.profilePhoto) === "string" ? user.profilePhoto : ''}/>}
                            endIcon={<MoreHorizIcon/>
                            }
                            onClick={handleLogout}
                    >
                        <Box component={"span"}>
                            <Typography style={{
                                fontSize: 14,
                                textAlign: 'start',
                                fontWeight: 800
                            }}> Юра</Typography>
                            <Typography variant={"subtitle1"} style={{
                                fontSize: 14,
                                width: "100%",
                                fontWeight: 400,
                                color: 'rgb(107,123,136)'
                            }}>@KjOqW4on4cUf7xT</Typography>
                        </Box>
                    </Button>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color={'secondary'}
                                className={classes.sideBarHiddenUserAccountButton}
                                onClick={handleLogout}>
                        <Avatar src={typeof (user.profilePhoto) === "string" ? user.profilePhoto : ''}/>
                    </IconButton>
                </Hidden>
                <AddTweetModal isOpen={visibleAddTweetModal} toggleStatus={handleCloseAddTweetModal}/>
            </Box>
        </>
    )
}
