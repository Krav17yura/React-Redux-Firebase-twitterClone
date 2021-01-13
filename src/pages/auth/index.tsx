import React, {useEffect, useState} from "react";
import {Box, Button, FormControl, FormGroup, List, ListItem, TextField, Typography,} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";
import ModalBlock from "../../components/modalBlock";

import {useStyleAuth} from './style'
import {useDispatch, useSelector} from "react-redux";
import {appLogin, appRegister} from "../../store/ducks/auth/actionCreators";
import {selectAuthStatus} from "../../store/ducks/auth/selectors";
import {AuthStatusState} from "../../store/ducks/auth/contracts/state";


export const Auth = (props: { history: string[]; }) => {
    const authStatus = useSelector(selectAuthStatus)
    const classes = useStyleAuth();
    const dispatch = useDispatch();
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

    const [loginFormEmailValue, setLoginFormEmailValue] = useState<string>('')
    const [loginFormPasswordValue, setLoginFormPasswordValue] = useState<string>('')

    const [registerFormFullNameValue, setRegisterFullNameValue] = useState<string>('')
    const [registerFormEmailValue, setRegisterFromEmailValue] = useState<string>('')
    const [registerFormPasswordValue, setRegisterFormPasswordValue] = useState<string>('')
    const [registerFormUserPhotoValue, setRegisterFormUserPhotoValue] = useState<string>('')


    const handleOpenSignIn = (): void => setVisibleModal('signIn');
    const handleOpenSignUp = (): void => setVisibleModal('signUp');
    const handleCloseModal = (): void => setVisibleModal(undefined);

    useEffect(() => {
        if (authStatus === AuthStatusState.TRUE) {
            props.history.push("/home")
        }
    }, [authStatus])


    const loginFormSubmit = () => {
        dispatch(appLogin({email: loginFormEmailValue, password: loginFormPasswordValue}))
        handleCloseModal()
        setLoginFormPasswordValue('')
        setLoginFormEmailValue('')
    }

    const registerFormSubmit = () => {
        dispatch(appRegister({
            email: registerFormEmailValue,
            password: registerFormPasswordValue,
            fullName: registerFormFullNameValue,
            profilePhoto: registerFormUserPhotoValue
        }))
        handleCloseModal()
        setRegisterFullNameValue('')
        setRegisterFromEmailValue('')
        setRegisterFormPasswordValue('')
    }


    return (
        <Box className={classes.wrapper}>
            <section className={classes.infoSide}>
                <TwitterIcon className={classes.infoSideBackgroundIcon} color={'primary'}/>
                <List className={classes.infoSideList}>
                    <ListItem className={classes.infoSideListItem}>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.infoSideListIcon}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.infoSideListItem}>
                        <Typography variant='h6'>
                            <PeopleOutlineIcon className={classes.infoSideListIcon}/>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </ListItem>
                    <ListItem className={classes.infoSideListItem}>
                        <Typography variant='h6'>
                            <MessageIcon className={classes.infoSideListIcon}/>
                            Присоединяйтесь к общению.
                        </Typography>
                    </ListItem>
                </List>
            </section>
            <section className={classes.loginSide}>
                <Box className={classes.loginSideContainer}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} color={'primary'}/>
                    <Typography className={classes.loginSideTitle} variant='h4'>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography className={classes.loginSideSubTitle}>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <Button className={classes.btn} variant='contained' color='primary' fullWidth
                            onClick={handleOpenSignUp}>
                        Зарегистрироваться
                    </Button>
                    <Button variant='outlined' color='primary' fullWidth onClick={handleOpenSignIn}>
                        Войти
                    </Button>
                </Box>
                <ModalBlock
                    title='Войти в аккаунт'
                    onClose={handleCloseModal}
                    visible={visibleModal === 'signIn'}
                > <FormControl
                    className={classes.loginFormControl}
                    component='fieldset'
                    fullWidth
                >
                    <FormGroup aria-label='position' row>
                        <form onSubmit={loginFormSubmit}>
                            <TextField
                                className={classes.loginSideField}
                                autoFocus
                                required
                                id='loginEmail'
                                label='E-Mail'
                                value={loginFormEmailValue}
                                onChange={event => setLoginFormEmailValue(event.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                type='email'
                                fullWidth
                            />
                            <TextField
                                className={classes.loginSideField}
                                required
                                id='loginPassword'
                                label='Пароль'
                                value={loginFormPasswordValue}
                                onChange={event => setLoginFormPasswordValue(event.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                type='password'
                                fullWidth
                            />
                            <Button

                                variant='contained'
                                color='primary'
                                type={"submit"}
                                fullWidth
                            >
                                Войти
                            </Button>
                        </form>
                    </FormGroup>
                </FormControl>
                </ModalBlock>

                <ModalBlock
                    title='Создайте учетную запись'
                    onClose={handleCloseModal}
                    visible={visibleModal === 'signUp'}
                >
                    <FormControl
                        className={classes.loginFormControl}
                        component='fieldset'
                        fullWidth
                    >
                        <FormGroup aria-label='position' row>
                            <form onSubmit={registerFormSubmit}>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    required
                                    id='name'
                                    label='Имя Фамилия'
                                    value={registerFormFullNameValue}
                                    onChange={event => setRegisterFullNameValue(event.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant='filled'
                                    type='text'
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    required
                                    id='userPhoto'
                                    label='Ссылка на фотографию аккаунта'
                                    value={registerFormUserPhotoValue}
                                    onChange={event => setRegisterFormUserPhotoValue(event.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant='filled'
                                    type='text'
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    id='email'
                                    value={registerFormEmailValue}
                                    onChange={event => setRegisterFromEmailValue(event.target.value)}
                                    label='E-Mail'
                                    required
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant='filled'
                                    type='email'
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    id='password'
                                    label='Пароль'
                                    required

                                    value={registerFormPasswordValue}
                                    onChange={event => setRegisterFormPasswordValue(event.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant='filled'
                                    type='password'
                                    fullWidth
                                />
                                <Button
                                    type={"submit"}
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                >
                                    Далее
                                </Button>
                            </form>
                        </FormGroup>
                    </FormControl>
                </ModalBlock>
            </section>

        </Box>
    )
}

