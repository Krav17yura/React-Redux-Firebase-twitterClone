import React from 'react'
import {
    Grid,
    Typography,
    Container,
    IconButton,
    Paper,
    Box, Avatar,
} from "@material-ui/core";


import {SideBar} from "../../components/sideBar";
import {AddTweetForm} from "../../components/addTweetForm";
import {BottomNavigationBar} from "../../components/bottomNavigationBar";
import {Twit} from "../../components/twit";
import {SearchInputBar} from "../../components/searchInputBar";
import {ActualInformationBar} from "../../components/actualInformationBar";
import {RecommendationsBar} from "../../components/recommendationsBar";
import {MobileDrawer} from "../../components/mobileDrawer";

import StarBorderIcon from '@material-ui/icons/StarBorder';


import {useStyleHome} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets } from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoaded, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {Preloader} from "../../components/preloader";
import {Route} from "react-router";
import {BackButton} from "../../components/backButton";
import { FullTweet } from '../../components/fullTweet';
import {selectUser} from "../../store/ducks/auth/selectors";




export const Home = () => {
    const classes = useStyleHome();
    const dispatch = useDispatch();

    const tweets = useSelector(selectTweetsItems);
    const isLoaded = useSelector(selectIsTweetsLoaded)
    const user = useSelector(selectUser)

    const [visibleMobileDrawer, SetVisibleMobileDrawer] = React.useState<boolean>(false);


    // React.useEffect(() => {
    //     db.collection('posts').onSnapshot((snapshot) =>
    //         setData(
    //             snapshot.docs.map((doc) => ({
    //                   ...doc.data(),
    //             }))
    //         )
    //     );
    //     dispatch(fetchTweets(data))
    // }, [dispatch])
    // console.log(data)

    React.useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])



    const toggleVisibleDrawer = () => (event: React.MouseEvent) => {
        SetVisibleMobileDrawer(!visibleMobileDrawer)
    };

    return (
        <div className={classes.main}>
            <Container className={classes.wrapper} maxWidth={"lg"}>
                <Grid container style={{height: '100%'}}>
                    <Grid item sm={2} md={2} className={classes.sideBarGrid}>
                        <Grid container alignItems={'flex-end'} className={classes.sideBarGridContainer}>
                            <SideBar/>
                        </Grid>
                    </Grid>
                    <Grid item md={6} sm={10} xs={12} className={classes.mainSideGrid}>
                        <Grid container justify={'center'} style={{height: '100%'}}>
                            <Paper className={classes.mainSideWrapper} variant={"outlined"}>
                                <Box className={classes.mainSideHeaderBlock}>
                                    <Avatar
                                        src={typeof(user.profilePhoto) === "string"? user.profilePhoto: ''}
                                        onClick={toggleVisibleDrawer()}/>

                                    <Route path={'/home/:any'}  >
                                         <BackButton/>
                                    </Route>
                                   <Route path={['/home', '/home/search']} exact>
                                       <Typography className={classes.mainSideHeaderTitle} variant={'h6'}
                                                   color={'secondary'}>
                                           Твиты
                                       </Typography>
                                   </Route>
                                    <Route path={'/home/tweet'}  >
                                        <Typography className={classes.mainSideHeaderTitle} variant={'h6'}
                                                    color={'secondary'}>
                                            Твитнуть
                                        </Typography>
                                    </Route>


                                    <IconButton className={classes.mainSideHeaderButton} color={"primary"}>
                                        <StarBorderIcon fontSize="small"/>
                                    </IconButton>
                                </Box>
                                <Route path={['/home', '']} exact>
                                    <Box className={classes.mainSideAddTweetFormBox}>
                                        <AddTweetForm/>
                                        <Box className={classes.headerPaddingBox}/>
                                    </Box>
                                </Route>
                                <Route path={['/home', '']} exact>
                                    {isLoaded ? tweets.map((item: any) => (
                                        <Twit key={item._id} timestamp={item.timestamp.seconds} {...item}/>
                                    )) : <Preloader/>}
                                </Route>
                                <Route path="/home/tweet/:id" exact>
                                    <FullTweet/>
                                </Route>
                            </Paper>
                            <MobileDrawer isOpen={visibleMobileDrawer} toggleDrawer={toggleVisibleDrawer()}/>
                        </Grid>
                    </Grid>
                    <Grid item md={3} className={classes.infoSideGrid}>
                        <SearchInputBar/>
                        <ActualInformationBar/>
                        <RecommendationsBar/>
                    </Grid>
                    <Grid container className={classes.bottomNavigationGrid}>
                        <BottomNavigationBar/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

