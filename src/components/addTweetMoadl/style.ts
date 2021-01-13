import {makeStyles} from "@material-ui/core";

export const useStyleAddTweetModal = makeStyles({
    dialogRoot:{
      '& .MuiPaper-root':{
          width: '100%',

      }
    },
    addTweetModalPaper:{
        backgroundColor: 'rgb(21,32,43)',
        height: "100%",
        width: '100%',
        "& .MuiDialogTitle-root": {
            borderBottom: '1px solid rgb(56,68,77)',
            margin: 0,
            padding: "5px 5px 5px 10px",
        }
    }
})