import React from 'react';
import {Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


interface IModalBlockProps {
    children: React.ReactNode;
    title?: string;
    visible?: boolean;
    onClose: () => void;
}

  const ModalBlock: React.FC<IModalBlockProps> = ({title, children, visible = false, onClose,}: IModalBlockProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            aria-labelledby='form-dialog-title'
        >
            <DialogTitle id='form-dialog-title'>
                <IconButton onClick={onClose} color='secondary' aria-label='close'>
                    <CloseIcon style={{fontSize: 26}} color='secondary'/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default ModalBlock