import {makeStyles, Theme} from "@material-ui/core";

export const useStyleSearchInputBar = makeStyles((theme: Theme) => ({
    infoSideSearchBlock:{
        zIndex: 1,
        backgroundColor: 'rgb(21,32,43)',
        paddingBottom: 15,
        position: 'sticky',
        top: 0
    },

    infoSideSearchInput: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: 'rgb(37,51,65)',
            marginTop: 10,
            color: 'white',
            paddingLeft: 10,
            '& svg path': {
                fill: "rgb(103,119,133)",
            },
            '&.Mui-focused': {
                backgroundColor: 'rgb(21,32,43)',
                '& fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': {borderColor: 'transparent'},
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },
        '& .MuiInputAdornment': {
            '& .disablePointerEvents': {
                color: '#fffff'
            }
        }
    },
}))