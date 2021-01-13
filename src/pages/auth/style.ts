import {makeStyles, Theme} from "@material-ui/core";

export const useStyleAuth = makeStyles((theme:Theme) => ({
    wrapper: {
        display: 'flex',
        height: "100vh",
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            height: "100%",
        },
    },
    infoSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(116,202,254)',
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
             padding: 10
        },

    },
    infoSideList: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 390,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            color: "white",
            fontWeight: 700,
            fontSize: 18
        }
    },
    infoSideListIcon: {
        fontSize: 32,
        marginRight: 15
    },
    infoSideListItem: {
        marginBottom:20
    },
    infoSideBackgroundIcon: {
        position: 'absolute',
        left: '60%',
        top: '52%',
        transform: 'translate(-50%, -50%)',
        width: '250%',
        height: '250%'
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
        backgroundColor: 'rgb(21,32,43)',
        [theme.breakpoints.down('sm')]: {
            padding: 15
        },
    },
    loginSideTwitterIcon: {
        color: 'white',
        fontSize: 45
    },
    loginSideContainer: {
        width: 380
    },
    loginSideTitle: {
        color: 'white',
        fontWeight: 700,
        fontSize: 30,
        marginBottom: 45,
        marginTop: 20
    },
    loginSideSubTitle:{
        color: 'white'
    },
    btn: {
        marginTop: 10,
        marginBottom: 20,
        color: 'white'
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
    loginSideField: {
        marginBottom: 18,
    }
}))


