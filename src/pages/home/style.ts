import {makeStyles, Theme} from "@material-ui/core";

export const useStyleHome = makeStyles((theme: Theme) => ({
    main: {
        margin: 0,
        padding: 0,
        backgroundColor: 'rgb(21,32,43)',
        height: '100%',
    },
    wrapper: {
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            padding: 0
        },
    },


    sideBarGrid: {
        position: "sticky",
        top: 0,
        height: '100vh',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    sideBarGridContainer: {
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        flexWrap: 'nowrap',
        height: '100%',

    },
    mainSideGrid: {
        minHeight: '100vh',
        width: '100%',
        position: "relative",
        marginLeft: 40,
        [theme.breakpoints.down('md')]: {
            margin: 0,
            padding: 0
        },
    },
    mainSideAddTweetFormBox:{
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    infoSideGrid: {
        height: '100%',
        marginLeft: 20,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    bottomNavigationGrid: {
        position: 'sticky',
        bottom: 0,
        display: 'none',
        [theme.breakpoints.only('xs')]: {
            display: 'block',
        },
    },


    //////////////////
    //mainSide
    mainSideWrapper: {
        borderRadius: 0,
        border: '1px solid rgb(56,68,77)',
        borderTop: 0,
        marginBottom: '10%',
        borderBottom: 0,
        height: '100%',
        width: '100%',
        backgroundColor: "rgb(21,32,43)",

    },

    //mainSideHeader
    mainSideHeaderBlock: {
        position: 'sticky',
        backgroundColor: "rgb(21,32,43)",
        top: 0,
        zIndex: 1,
        borderBottom: '1px solid rgb(56,68,77)',
        padding: '5px 10px 0 10px',
        display: 'flex',
        alignItems: 'center',
        '& .MuiAvatar-root': {
            width: theme.spacing(4),
            height: theme.spacing(4),
            marginRight: 15,
            display: 'none',
            [theme.breakpoints.only('xs')]: {
                display: 'block',
            },
        },


    },
    mainSideHeaderTitle: {
        fontWeight: 800,
        padding: 0,
        margin: 0,
    },

    mainSideHeaderButton: {
        marginLeft: 'auto',
        "&:hover, &.Mui-focusVisible": {
            backgroundColor: 'rgba(40,77,121,0.6)',
        },
    },
    headerPaddingBox:{
        height: "10px",
        backgroundColor: 'rgb(25,39,52)',
        borderBottom: '1px solid rgb(56,68,77)'
    }


}))