import {makeStyles, Theme} from "@material-ui/core";

export const useStyleTwit = makeStyles((theme: Theme) => ({
    twitContainer: {
        border: '1px solid rgb(56,68,77)',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: 10,
        paddingBottom: 0,
        "& a":{
            textDecoration: 'none'
        },
        "&:hover":{
            backgroundColor: 'rgb(25,39,52)'
        }
    },
    twitHeaderBlock: {
        maxWidth: '100%',
        display: 'flex'
    },
    twitHeaderButton: {
        color: 'rgb(136,153,166)',
        marginLeft: 'auto',
        "&:hover, &.Mui-focusVisible": {
            backgroundColor: 'rgba(40,77,121,0.6)',
            color: "rgb(29,161,243)"
        },
    },
    twitNickName: {
        whiteSpace: "nowrap", /* Текст не переносится */
        overflow: "hidden", /* Обрезаем всё за пределами блока */
        textOverflow: "ellipsis", /* Добавляем многоточие */
        color: 'white',
        fontSize: 14,
        fontWeight: 800
    },
    twitUserUrl: {
        fontSize: 14,
        width: "100%",
        fontWeight: 400,
        color: 'rgb(107,123,136)'
    },
    twitIconButtonBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '80%'
    },
    twitIconButton: {
        color: 'rgb(136,153,166)',
        "&:hover, &.Mui-focusVisible": {
            backgroundColor: 'rgba(40,77,121,0.6)',
            color: "rgb(29,161,243)"
        },
        '&.MuiIconButton-sizeSmall': {
            padding: 10,
            margin: 0
        }
    }

}))