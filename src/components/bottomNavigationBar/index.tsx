import React from "react";

import {IconButton, BottomNavigation, BottomNavigationAction} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/SearchRounded";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import CreateIcon from "@material-ui/icons/Create";

import {useStyleBottomNavigation} from "./style";
import {AddTweetModal} from "../addTweetMoadl";

export const BottomNavigationBar = () => {
    const classes = useStyleBottomNavigation();

    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    const [visibleAddTweetModal, setVisibleAddTweetModal] = React.useState<boolean>(false);

    const handleCloseAddTweetModal = (value: boolean) => (event: React.MouseEvent) => {
        setVisibleAddTweetModal(value)
    }

    return (
        <>
            <IconButton color={'secondary'} className={classes.addTwittButton}  onClick={handleCloseAddTweetModal(true)} >
                <CreateIcon/>
            </IconButton>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction value="recents" className={classes.nav} icon={<HomeIcon fontSize={"large"}/>}/>
                <BottomNavigationAction value="favorites" className={classes.nav}
                                        icon={<SearchIcon fontSize={"large"}/>}/>
                <BottomNavigationAction value="nearby" className={classes.nav}
                                        icon={<NotificationsIcon fontSize={"large"}/>}/>
                <BottomNavigationAction value="folder" className={classes.nav} icon={<MailIcon fontSize={"large"}/>}/>
            </BottomNavigation>
            <AddTweetModal isOpen={visibleAddTweetModal} toggleStatus={handleCloseAddTweetModal}/>
        </>
    );
}

