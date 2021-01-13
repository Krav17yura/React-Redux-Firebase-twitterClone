import {makeStyles, Theme} from "@material-ui/core";


export const useStyleAddTweetForm = makeStyles((theme: Theme) => ({
    addTweetFormContainer: {
        borderBottom: '1px solid rgb(56,68,77)',
        padding: '10px 10px 5px 10px '
    },
    tweetsMessageBlock: {
        marginLeft: 2,
        width: '100%'
    },

    formTweetsMessage: {
        backgroundColor: 'rgb(21,32,43)',
        border: 'none',
        fontSize: 19,
        fontWeight: 400,
        padding: '8px 0',
        color: 'white',
        width: '100%',
        outline: 'none',
        resize: 'none',
    },
    formTweetsFooter: {
        position: 'relative',
        left: '-11px',
        padding: '5px 0',
    },
    footerIconButton:{
      '& .MuiIconButton-root':{
          margin: 0,
          padding: 8,
          '&:hover':{
              backgroundColor: 'rgba(33,102,148, 0.3)',
          }
      }
    },
    formTweetsActionIcon: {
        fontSize: 23,
    },
    rootProgressCircle: {
        position: 'relative',
        margin: '0 15px 0 10px',
    },
    bottomProgressCircle: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 100 : 900],
    },
    topProgressCircle: {
        position: 'absolute',
        left: 0,
    },
    footerCircleBox:{
        '& .MuiButton-root':{
            color: 'white'
        },
        '& .Mui-disabled':{
           backgroundColor: 'rgb(25,96,142)',
            color: 'rgb(82,120,146)'
        }
    },
    alertErrorTweet: {
        marginBottom: 10,
        position: 'absolute'
    },
}))