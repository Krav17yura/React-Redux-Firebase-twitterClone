import {createStyles, makeStyles} from "@material-ui/core";

export const useStyleSideBar = makeStyles((theme) =>
    createStyles({
        sideMenu: {
            flex:' 1 0 auto',
            margin: 0,
            padding: 0,
        },
        sideBarListItem:{
            padding: 5,
            paddingLeft: 15,
            '& .MuiButton-root':{
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 19,
                "&:hover, &.Mui-focusVisible": {
                    backgroundColor: 'rgba(40,77,121,0.6)',
                    color: "rgb(29,161,243)"
                },
            }
        },
        sideBarIcon: {
            fontSize: 32
        },
        sideBarLogoIcon: {
            "&:hover, &.Mui-focusVisible": {
                backgroundColor: 'rgba(40,77,121,0.6)'
            }
        },

        sideBarHiddenButton: {
            "&:hover, &.Mui-focusVisible": {
                backgroundColor: 'rgba(40,77,121,0.6)',
                color: "rgb(29,161,243)"
            },
        },
        sideBarAddTwittButton: {
            backgroundColor: "rgb(29,161,243)"
        },
        sideBarUserAccountBlock:{
            flex: '0 0 auto',
        },
        sideBarUserAccountButton:{
            height:50,
            left: 5,
            bottom: 5,
            "&:hover, &.Mui-focusVisible": {
                backgroundColor: 'rgba(40,77,121,0.6)',

            },
        },
        sideBarHiddenUserAccountButton:{
            margin: 15,
            "&:hover, &.Mui-focusVisible": {
                backgroundColor: 'rgba(40,77,121,0.6)',
                color: "rgb(29,161,243)"
            },
        },

    }))


