import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton, Typography, Box, useTheme, useMediaQuery, Checkbox
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import {useStyleActualInformationSettingModal} from './style'

interface IActualInformationSettingModal {
    isOpen?: boolean,
    toggleStatus: (e: React.MouseEvent) => void
}


export const ActualInformationSettingModal: React.FC<IActualInformationSettingModal> = ({isOpen = false, toggleStatus}: IActualInformationSettingModal) => {
    const classes = useStyleActualInformationSettingModal();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={toggleStatus}
            aria-labelledby="responsive-dialog-title"
        >
            <Box className={classes.paper}>
                <DialogTitle id="alert-dialog-title">
                    <IconButton color={'primary'} onClick={toggleStatus}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography color={"secondary"}>
                        Актуальные темы
                    </Typography>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <Box className={classes.dialogContentHeader}>
                        <Typography color={"secondary"}>
                            Местоположение
                        </Typography>
                    </Box>
                    <Box className={classes.dialogContentBody}>
                        <Box>
                            <Typography color={"secondary"}>
                                Показать контент в этом регионе
                            </Typography>
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                color="primary"
                            />
                        </Box>
                      <Typography> Когда эта функция включена, вы можете узнать, что происходит прямо сейчас.</Typography>
                    </Box>

                    <Box className={classes.dialogContentHeader}>
                        <Typography color={"secondary"}>
                            Персонализация
                        </Typography>
                    </Box>
                    <Box className={classes.dialogContentBody}>
                        <Box>
                            <Typography color={"secondary"}>
                                Актуальные темы для вас
                            </Typography>
                            <Checkbox
                                checked={state.checkedB}
                                name="checkedB"
                                onChange={handleChange}
                                color="primary"
                            />
                        </Box>
                        <Typography> Вы можете настроить подборку актуальных тем с учетом своего местоположения и людей, которых вы читаете. </Typography>
                    </Box>


                </DialogContent>
            </Box>
        </Dialog>
    );
}