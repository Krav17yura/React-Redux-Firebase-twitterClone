import {makeStyles} from "@material-ui/core";

export const useStyleRecommendations = makeStyles({
    infoSideRecommendationsBlock:{
        backgroundColor: 'rgb(25,39,52)',
        marginTop: 20,
        borderRadius:  22,
        minWidth: 220,
        width: '100%',
        '& .MuiList-root': {
            padding: 0,
        },
    },
    infoSideRecommendationsBlockHeader:{
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgb(56,68,77)',
        padding: '13px 18px',
        '& .MuiTypography-h6': {
            textAlign: 'start',
            fontWeight: 800,
            fontSize: 16,
        },
    },

    infoSideRecommendationBlockListItem:{
        cursor: 'pointer',
        borderBottom: '1px solid rgb(56,68,77)',
        alignItems: 'start',
        '& .MuiBox-root':{
            display: "flex",
            overflow: "hidden",
        },
        '& .MuiListItemText-primary': {
            color: 'white',
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            '&:hover':{
                textDecoration: 'underline',
            }
        },
        '& .MuiListItemText-secondary': {
            color: 'rgb(105,121,134)',
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '&:hover': {
            backgroundColor: 'rgb(37,51,65)',
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        "& .MuiButton-root":{
            marginTop: 5,
            fontSize: 14,
            height: 30
        }
    },
    infoSideRecommendationBlockFooter:{
        cursor: 'pointer',
        backgroundColor: 'rgb(25,39,52)',
        padding: 15,
        borderRadius: '0 0 22px 22px',
        '&:hover': {
            backgroundColor: 'rgb(37,51,65)',
        },
    },
})