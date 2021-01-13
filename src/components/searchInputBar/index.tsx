import React, {useState} from 'react'
import {Box, IconButton, InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import CancelIcon from "@material-ui/icons/Cancel";

import {useStyleSearchInputBar} from "./style";

export const SearchInputBar = () => {
    const classes = useStyleSearchInputBar();
    const [searchInput, setSearchInput] = useState('1');

    return(
        <Box component={"section"} className={classes.infoSideSearchBlock}>
            <TextField
                placeholder='Поиск по Твиттеру'
                variant={'outlined'}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <SearchIcon/>
                    ),
                    endAdornment: (
                        <InputAdornment position={'end'}>
                            {searchInput.length > 0 ?
                                <IconButton>
                                    <CancelIcon/>
                                </IconButton> : null}
                        </InputAdornment>
                    )
                }}
                className={classes.infoSideSearchInput}/>
        </Box>
    )
}