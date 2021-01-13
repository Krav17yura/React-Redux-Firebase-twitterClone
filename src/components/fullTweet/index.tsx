import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../../store/ducks/tweet/actionCreators";
import {selectTweetItems, selectTweetLoaded} from "../../store/ducks/tweet/selectors";
import {useParams} from "react-router";
import {Preloader} from "../preloader";
import {Avatar, Box, IconButton, Typography} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import EqualizerIcon from "@material-ui/icons/Equalizer";


import {useStyleFullTweet} from "./style";
import moment from "moment";


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useStyleFullTweet()
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetItems);
    const isLoading = useSelector(selectTweetLoaded);
    const params: { id?: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }

        return () => {
            dispatch(setTweetData(undefined));
        };

    }, [dispatch, id]);

    if (!tweetData) {
        return null;
    }

    return (
        <>
            {isLoading ?
                <Box className={classes.twitContainer}>
                    <Box className={classes.fullTweetHeader}>
                        <Avatar
                            src={typeof (tweetData.user.profilePhoto) === "string" ? tweetData.user.profilePhoto : ''}
                            style={{marginRight: 10}}
                            className={classes.fullTweetAvatar}/>
                        <Box style={{width: '100%'}}>
                            <Box className={classes.fullTweetHeaderUserName}>
                                <Typography variant={'h6'} className={classes.fullTwitNickName}>
                                    {tweetData.user.fullName}
                                </Typography>
                                <IconButton className={classes.fullTwitHeaderButton} size={"small"}>
                                    <MoreHorizIcon style={{fontSize: 22}}/>
                                </IconButton>
                            </Box>
                            <Typography variant={'h6'} className={classes.fullTwitUserUrl}>
                                @{tweetData._id}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant={'h5'} color={"secondary"} style={{wordWrap: "break-word"}}>
                        {tweetData.text}
                    </Typography>
                    <Box className={classes.fullTweetInfoBlock}>
                        <Typography>
                            {moment.unix(tweetData.timestamp.seconds).format("LLL")}
                        </Typography>
                        <Typography>
                            ·Twitter Web App
                        </Typography>
                    </Box>
                    <Box className={classes.fullTweetActiveInfoBlock}>
                        <EqualizerIcon style={{marginRight: 10}}/>
                        <Typography>
                            Посмотреть акртивность с твитом
                        </Typography>
                    </Box>

                    <Box className={classes.fullTwitIconButtonBlock}>
                        <Box>
                            <IconButton className={classes.fullTwitIconButton} size={"small"}>
                                <ChatBubbleOutlineIcon style={{fontSize: 18}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton className={classes.fullTwitIconButton} size={"small"}>
                                <RepeatIcon style={{fontSize: 18}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton className={classes.fullTwitIconButton} size={"small"}>
                                <FavoriteBorderIcon style={{fontSize: 18}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton className={classes.fullTwitIconButton} size={"small"}>
                                <ShareIcon style={{fontSize: 18}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton className={classes.fullTwitIconButton} size={"small"}>
                                <EqualizerIcon style={{fontSize: 18}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box> : <Preloader/>}
        </>

    )
}