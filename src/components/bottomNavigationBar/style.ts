import {makeStyles} from "@material-ui/core";

export const useStyleBottomNavigation = makeStyles({
    root: {
        borderTop: ' 1px solid rgb(56,68,77)',
        width: '100%',
        backgroundColor: 'rgb(21,32,43)',
    },
    nav: {
        color: "rgb(103,119,133)",
    },
    addTwittButton: {
        position: 'absolute',
        right: 20,
        bottom: 70,
        backgroundColor: "rgb(29,161,243)"
    },
})