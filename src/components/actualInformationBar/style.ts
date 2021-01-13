import {makeStyles} from "@material-ui/core";

export const useStyleActualInformation = makeStyles({
    infoSideActualBlock: {
        backgroundColor: 'rgb(25,39,52)',
        marginTop: 20,
        borderRadius: 22,
        minWidth: 220,
        width: '100%',
        '& .MuiList-root': {
            padding: 0,
            '& a':{
                textDecoration: 'none'
            }
        },
    },
    infoSideActualBlockHeader: {
        backgroundColor: 'transparent',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: '1px solid rgb(56,68,77)',
        padding: '13px 18px',

        '& h6': {
            textAlign: 'start',
            fontWeight: 800,
            fontSize: 16,

        },
    },

    infoSideActualBlockSettingButton: {
        marginLeft: 'auto',
        "&:hover, &.Mui-focusVisible": {
            backgroundColor: 'rgba(40,77,121,0.6)',
            color: "rgb(29,161,243)"
        },
    },
    infoSideActualBlockListItem: {
        cursor: 'pointer',
        borderBottom: '1px solid rgb(56,68,77)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiBox-root':{
            display: 'flex',
            width: '100%',
            margin: 0,
            padding: 0,
            '& .MuiIconButton-root':{

                color: 'rgb(136,153,166)',
                marginLeft: 'auto',
                padding: 0,
                marginBottom:0,
                "&:hover, &.Mui-focusVisible": {
                    backgroundColor: 'rgba(40,77,121,0.6)',
                    color: "rgb(29,161,243)"
                },
            }
        },
        '& .MuiTypography-subtitle2': {
            color: 'rgb(105,121,134)'
        },

        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: 'rgb(37,51,65)',
        },
    },
    infoSideActualBlockListItemText: {
        '& .MuiListItemText-primary': {
            color: 'white'
        },
        '& .MuiListItemText-secondary': {
            color: 'rgb(105,121,134)'
        }
    },
    infoSideActualBlockFooter:{
        cursor: 'pointer',
        backgroundColor: 'rgb(25,39,52)',
        padding: 15,
        borderRadius: '0 0 22px 22px',
        '&:hover': {
            backgroundColor: 'rgb(37,51,65)',
        },
    },
})
