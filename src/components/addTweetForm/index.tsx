import React from 'react'

import Grid from '@material-ui/core/Grid/Grid'
import Avatar from '@material-ui/core/Avatar/Avatar'
import Box from '@material-ui/core/Box/Box'
import IconButton from '@material-ui/core/IconButton/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import Button from '@material-ui/core/Button/Button'
import {Typography} from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize'
import Alert from '@material-ui/lab/Alert'


import ImageUploadIcon from '@material-ui/icons/ImageOutlined'
import SmilesIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimerIcon from '@material-ui/icons/Timer';


import {countToPercent} from '../../utils/core'
import {MAX_COUNT_LETTER_TWEET} from '../../constants'

import {useStyleAddTweetForm} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweet} from "../../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../../store/ducks/tweets/selectors";
import {AddFormState} from "../../store/ducks/tweets/contracts/state";
import {selectUser} from "../../store/ducks/auth/selectors";


interface IAddTweetFormProps {
    rowsMin?: number,
}

export const AddTweetForm: React.FC<IAddTweetFormProps> = ({rowsMin = 1, }) => {
    const dispatch = useDispatch();
    const isAddFormLoading = useSelector(selectAddFormState)
    const [text, setText] = React.useState<string>('')
    const classes = useStyleAddTweetForm();
    const user = useSelector(selectUser);

    // const isAddFormError = false


    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text))
        setText('')
    }


    const textLimitPercent = countToPercent(text.length, MAX_COUNT_LETTER_TWEET)
    const textCount = MAX_COUNT_LETTER_TWEET - text.length


    return (
        <form>
            <Box className={classes.addTweetFormContainer}>
                <Grid container>
                    <Grid item xs={2} sm={1}>
                        <Grid container justify={"center"}>
                            <Avatar
                                src={typeof(user.profilePhoto) === "string"? user.profilePhoto: ''}
                                style={{marginRight: 10}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs className={classes.tweetsMessageBlock}>
                        <TextareaAutosize
                            onChange={handleChangeTextarea}
                            value={text}
                            id="content"
                            className={classes.formTweetsMessage}
                            placeholder="Что происходит?"
                            rowsMin={rowsMin}
                        />
                        <Box display="flex" justifyContent="space-between" alignItems="center"
                             className={classes.formTweetsFooter}>
                            <Box className={classes.footerIconButton}>
                                <IconButton aria-label="comments">
                                    <ImageUploadIcon color="primary" className={classes.formTweetsActionIcon}/>
                                </IconButton>
                                <IconButton aria-label="comments">
                                    <GifIcon color="primary" className={classes.formTweetsActionIcon}/>
                                </IconButton>
                                <IconButton aria-label="comments">
                                    <EqualizerIcon color="primary" className={classes.formTweetsActionIcon}/>
                                </IconButton>
                                <IconButton aria-label="comments">
                                    <SmilesIcon color="primary" className={classes.formTweetsActionIcon}/>
                                </IconButton>
                                <IconButton aria-label="comments">
                                    <TimerIcon color="primary" className={classes.formTweetsActionIcon}/>
                                </IconButton>
                            </Box>
                            <Box display="flex" alignItems="center" className={classes.footerCircleBox}>
                                {text && (
                                    <>
                                        <Typography
                                            color={textLimitPercent > 100 ? 'error' : 'primary'}>{textCount}</Typography>
                                        <Box display="flex" alignItems="center" className={classes.rootProgressCircle}>
                                            <CircularProgress
                                                variant="determinate"
                                                className={classes.bottomProgressCircle}
                                                size={20}
                                                thickness={5}
                                                value={100}
                                            />
                                            <CircularProgress
                                                variant="determinate"
                                                className={classes.topProgressCircle}
                                                value={textLimitPercent >= 100 ? 100 : textLimitPercent}
                                                size={20}
                                                thickness={5}
                                                color={textLimitPercent > 100 ? 'inherit' : 'primary'}
                                            />
                                        </Box>
                                    </>
                                )}
                                <Button
                                    onClick={handleClickAddTweet}
                                    disabled={isAddFormLoading === AddFormState.LOADING || !text || textLimitPercent > 100}
                                    color="primary"
                                    variant="contained"
                                >
                                    {isAddFormLoading === AddFormState.LOADING ?
                                        <CircularProgress size={18} color="inherit"/> : 'Твитнуть'}
                                </Button>
                            </Box>
                        </Box>
                        {isAddFormLoading === AddFormState.ERROR && (
                            <Alert className={classes.alertErrorTweet} severity="error">
                                Ошибка добавления твита :(
                            </Alert>
                        )}
                    </Grid>
                </Grid>

            </Box>
        </form>
    )
}


