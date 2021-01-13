import {makeStyles, Theme} from "@material-ui/core"

export const useStyleActualInformationSettingModal = makeStyles((theme: Theme) => ({


    paper: {
        backgroundColor: 'rgb(21,32,43)',
        height: "100%",
        "& .MuiDialogTitle-root": {
            borderBottom: '1px solid rgb(56,68,77)',
            margin: 0,
            padding: "5px 5px 5px 10px",
            "& .MuiTypography-root": {
                fontSize: 20,
                fontWeight: 800
            },
            '& .MuiIconButton-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 28
                }
            }
        }
    },
    dialogContent: {
        padding: 0,

    },
    dialogContentHeader:{
        borderTop: '2px solid rgb(56,68,77)',
        padding: "5px 0 5px 0",
        "& .MuiTypography-root": {
            paddingLeft: 18,
            fontSize: 20,
            fontWeight: 800
        }
    },
    dialogContentBody:{
        padding: 10,
        borderTop: '1px solid rgb(56,68,77)',
        "& .MuiBox-root": {
            display: 'flex',
            width: '100%',
            padding: 0,
            "& .MuiTypography-root": {
                color: "white",
                paddingLeft: 8,
                fontSize: 16,
                fontWeight: 400
            },
            "& .MuiCheckbox-root": {
                bottom: 6   ,
                marginLeft: 'auto',
                color: 'rgb(29,161,242)',
                '&$checked': {
                    color: 'green',
                    margin: 0,
                },
            }
        },
        "& .MuiTypography-root": {
            paddingLeft: 8,
            fontSize: 14,
            color: 'rgb(104,119,132)',
            fontWeight: 400
        },
    },
    checked: {},
}))