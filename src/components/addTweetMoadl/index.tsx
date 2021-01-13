import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import {useStyleAddTweetModal} from "./style";
import {AddTweetForm} from "../addTweetForm";
import {Box, IconButton, useMediaQuery, useTheme} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface IAddTweetModalProps {
    isOpen: boolean,
    toggleStatus: (value: boolean) => (e: React.MouseEvent) => void
}


export const AddTweetModal: React.FC<IAddTweetModalProps> = ({isOpen, toggleStatus }: IAddTweetModalProps) => {
    const classes = useStyleAddTweetModal();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Dialog
            className={classes.dialogRoot}
            fullScreen={fullScreen}
            open={isOpen}
            onClose={toggleStatus(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box className={classes.addTweetModalPaper}>
                <DialogTitle id="alert-dialog-title">
                    <IconButton color={'primary'} onClick={toggleStatus(false)}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <Box>
                    <AddTweetForm rowsMin={4}/>
                </Box>
            </Box>
        </Dialog>

    )
}