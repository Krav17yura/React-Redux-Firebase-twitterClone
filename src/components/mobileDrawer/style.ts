import {makeStyles} from "@material-ui/core";

export const useStyleMobileDrawer =  makeStyles({
    drawer: {
        backgroundColor: 'rgba(114,135,155, 0.7)'
    },
    drawerPaper: {
        width: 320,
        flexShrink: 0,
        backgroundColor: 'rgb(21,32,43)',
    },
    drawerHeader: {
        backgroundColor: 'rgb(21,32,43)',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        padding: '10px 10px 0 10px',
        borderBottom: '1px solid rgb(56,68,77)',
        display: 'flex',
        "& .MuiTypography-root": {
            fontWeight: 800,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "& .MuiIconButton-root": {
            padding: 7,
            "& .MuiSvgIcon-root": {
                fontSize: 26
            }
        }
    },
    drawerBody: {
        "& .MuiListItem-root": {
            padding: '0 15px 0 15px',
            "& .MuiListItemText-primary": {
                color: "white",
                fontWeight: 700,
                padding: 0
            },
            "& .MuiListItemText-secondary": {
                fontSize: 15,
                color: "rgb(119,133,146)",
                padding: 0
            },

        },
        "& .MuiDivider-root": {
            backgroundColor: 'rgb(81,88,93)'
        }
    },
    drawerUserAccount: {
        display: 'flex',
        "& .MuiIconButton-root": {
            marginLeft: 'auto'
        }
    },
    drawerUserAccountInfo: {
        '& .MuiTypography-root': {
            fontSize: 14,
            color: 'rgb(119,133,146)',
            padding: "10px 15px 10px 0",
            '&:hover': {
                textDecoration: 'underline'
            }
        },
        '& .MuiBox-root': {
            fontWeight: 700,
            color: 'white'
        }
    },
    drawerListMenuItem: {
        "&:hover": {
            backgroundColor: 'rgb(19,29,40)',
        },
        '& .MuiIcon-root': {
            color: 'rgb(119,133,146)',
            padding: '5px 5px 5px 0'
        },
        "& .MuiTypography-root": {
            padding: "12px 0 15px 0",
            fontWeight: 500,
            fontSize: 14,
            color: 'rgb(227,243,246)'
        }
    },
    fullList: {
        width: 'auto',
        zIndex: 1
    },
})