import React from "react";
import {IconButton, makeStyles} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router";

const useStyle = makeStyles({
    backButton: {
        marginRight: 20
    }
})

export const BackButton: React.FC = (): React.ReactElement => {
    const classes = useStyle()
    const history = useHistory()

    const handleClockButton = () => {
        history.goBack()
    }
    return (
        <IconButton className={classes.backButton} onClick={handleClockButton}  color={'primary'}  >
            <ArrowBackIcon/>
        </IconButton>
    )
}