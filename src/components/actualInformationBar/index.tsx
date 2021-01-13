import React from "react";

import {Box, IconButton, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";

import {ActualInformationSettingModal} from "../actualInformationBarSettingModal";

import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import {useStyleActualInformation} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {selectIsTagsLoaded, selectTagsItems} from "../../store/ducks/tags/selectors";
import {Preloader} from "../preloader";
import {Link} from "react-router-dom";

export const ActualInformationBar = () => {
    const classes = useStyleActualInformation()
    const dispatch = useDispatch()

    const tags = useSelector(selectTagsItems);
    const isLoading = useSelector(selectIsTagsLoaded)

    const [actualInfoSettingModal, setActualInfoSettingModal] = React.useState<boolean>(false);

    const toggleActualInfoSettingModal = () => (event: React.MouseEvent) => {
        setActualInfoSettingModal(!actualInfoSettingModal);
    };

    React.useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])


    return (
        <Paper className={classes.infoSideActualBlock}>
            <Paper className={classes.infoSideActualBlockHeader} variant='outlined'>
                <Box style={{display: 'flex'}}>
                    <Typography variant='h6'
                                color={'secondary'}>
                        Актуальные темы для вас
                    </Typography>
                    <IconButton size={'small'} className={classes.infoSideActualBlockSettingButton}
                                color={"primary"} onClick={toggleActualInfoSettingModal()}>
                        <SettingsOutlinedIcon/>
                    </IconButton>
                </Box>
            </Paper>

            <List>
                {isLoading?  tags.map((item) => (
                   <Link key={item.name} to={`/home/search?q=${item.name}`}>
                       <ListItem  className={classes.infoSideActualBlockListItem} >
                           <Box>
                               <Typography variant={"subtitle2"}>
                                   {item.header}
                               </Typography>
                               <IconButton size={'small'} color={"primary"}>
                                   <MoreHorizIcon/>
                               </IconButton>
                           </Box>
                           <ListItemText
                               className={classes.infoSideActualBlockListItemText}
                               primary={item.name}
                               secondary={`Твитов: ${item.count}`}
                           />
                       </ListItem>
                   </Link>
                )): <Preloader/>}
            </List>
            <Paper variant={'outlined'} className={classes.infoSideActualBlockFooter}>
                <Typography variant={"subtitle2"} color={"primary"}>
                    Показать ещё
                </Typography>
            </Paper>
            <ActualInformationSettingModal isOpen={actualInfoSettingModal}
                                           toggleStatus={toggleActualInfoSettingModal()}/>
        </Paper>
    )
}