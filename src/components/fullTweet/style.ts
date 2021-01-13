import {makeStyles, Theme} from "@material-ui/core";


export const useStyleFullTweet = makeStyles((theme: Theme) => ({
    fullTweetHeader: {
        display: 'flex',
        width: '100%'
    },
    fullTweetHeaderUserName: {
        width: '100%',
        display: 'flex'
    },
    twitContainer: {
        borderBottom: '1px solid rgb(56,68,77)',
        padding: "10px 20px 0 20px",
    },
    fullTweetAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },

    fullTwitHeaderButton: {
        color: 'rgb(136,153,166)',
        marginLeft: 'auto',
        "&:hover, &.Mui-focusVisible": {
            backgroundColor: 'rgba(40,77,121,0.6)',
            color: "rgb(29,161,243)"
        },
    },
    fullTwitNickName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 800,
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    fullTwitUserUrl: {
        fontSize: 16,
        fontWeight: 500,
        color: 'rgb(107,123,136)'
    },
    fullTweetInfoBlock: {
        display: 'flex',
        paddingBottom: 10,
        borderBottom: '1px solid rgb(56,68,77)',
        "& .MuiTypography-root": {
            paddingTop: 10,
            fontSize: 16,
            fontWeight: 400,
            color: 'rgb(107,123,136)',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },
    fullTweetActiveInfoBlock: {
        display: 'flex',
        color: 'rgb(107,123,136)',
        padding: '10px 0',
        borderBottom: '1px solid rgb(56,68,77)',
        "&:hover":{
            cursor: 'pointer',
            backgroundColor: 'rgb(25,39,52)'
        }
    },
    fullTwitIconButtonBlock: {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '100%'

    },
    fullTwitIconButton: {
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