import React from "react";
import {Avatar, Box, Grid, IconButton, Typography} from "@material-ui/core";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {useStyleTwit} from "./style";
import {Link} from "react-router-dom";
import moment from "moment";
import 'moment/locale/ru'

interface ITwitProps {
    _id: string
    text: string
    timestamp: any
    user: {
        fullName: string
        userName: string
        profilePhoto: string
        _id: string
    }
}

export const Twit: React.FC<ITwitProps> = ({ _id, text, user, timestamp: {seconds} }: ITwitProps): React.ReactElement => {
    const classes = useStyleTwit();

    return (
        <Box className={classes.twitContainer}>
            <Link to={`/home/tweet/${_id}`}>
                <Grid container>
                    <Grid item xs={2} sm={1}>
                        <Grid container justify={"center"}>
                            <Avatar src={user.profilePhoto} style={{marginRight: 10}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={11}>
                        <Box className={classes.twitHeaderBlock}>
                            <Typography variant={'h6'} className={classes.twitNickName}>
                                {user.fullName} <Box className={classes.twitUserUrl} component={"span"}>@{_id}
                                ·{moment.unix(seconds).format("LLL")}
                            </Box>
                            </Typography>
                            <IconButton className={classes.twitHeaderButton} size={"small"}>
                                <MoreHorizIcon style={{fontSize: 22}}/>
                            </IconButton>
                        </Box>
                        <Typography style={{wordWrap: "break-word"}} variant={'subtitle2'} color={"secondary"} >
                            {text}
                        </Typography>
                        <Box className={classes.twitIconButtonBlock}>
                            <Box>
                                <IconButton className={classes.twitIconButton} size={"small"}>
                                    <ChatBubbleOutlineIcon style={{fontSize: 18}}/>
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton className={classes.twitIconButton} size={"small"}>
                                    <RepeatIcon style={{fontSize: 18}}/>
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton className={classes.twitIconButton} size={"small"}>
                                    <FavoriteBorderIcon style={{fontSize: 18}}/>
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton className={classes.twitIconButton} size={"small"}>
                                    <ShareIcon style={{fontSize: 18}}/>
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton className={classes.twitIconButton} size={"small"}>
                                    <EqualizerIcon style={{fontSize: 18}}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Link>
        </Box>
    )
}