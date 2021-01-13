import React from "react";
import {Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@material-ui/core";

import {useStyleRecommendations} from "./style";

import {useDispatch, useSelector} from "react-redux";
import {fetchRecommendationAccounts} from "../../store/ducks/recommendationAccount/actionCreators";
import {
    selectIsRecommendationAccountsLoaded,
    selectRecommendationAccountsItems
} from "../../store/ducks/recommendationAccount/selectors";
import {Preloader} from "../preloader";


export const RecommendationsBar = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsRecommendationAccountsLoaded)
    const recommendationAccounts = useSelector(selectRecommendationAccountsItems)


    React.useEffect(() => {
        dispatch(fetchRecommendationAccounts())
    }, [dispatch])

    const classes = useStyleRecommendations()
    return (
        <Paper className={classes.infoSideRecommendationsBlock}>
            <Paper className={classes.infoSideRecommendationsBlockHeader} variant='outlined'>
                <Typography variant='h6' color={'secondary'}>
                    Кого читать
                </Typography>
            </Paper>

            <List>

                {isLoaded? recommendationAccounts.map((item) => (
                    <ListItem key={item._id} className={classes.infoSideRecommendationBlockListItem}>
                        <Box>
                            <ListItemAvatar>
                                <Avatar
                                    src={item.avatarUrl}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.fullName}
                                secondary={`@${item.userName}`}
                            />
                        </Box>
                        <Button color={"primary"} variant={"outlined"} style={{marginLeft: 'auto',}}>
                            Читать
                        </Button>
                    </ListItem>
                )): <Preloader/>}


            </List>
            <Paper variant={'outlined'} className={classes.infoSideRecommendationBlockFooter}>
                <Typography variant={"subtitle2"} color={"primary"}>
                    Показать ещё
                </Typography>
            </Paper>
        </Paper>
    )
}