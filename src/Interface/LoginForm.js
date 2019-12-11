import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./scss/Header.scss";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 350,
        height: 350,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 3),
        outline: "none",
        borderRadius: "15px"
    }
}));

const LoginForm = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonUseStyles = makeStyles({
        Button: {
            borderRadius: 20,
            height: 40,
            width: 120,
            color: "white"
        }
    });

    const buttonClasses = buttonUseStyles();

    return (
        <span>
            <span
                type="button"
                style="cursor: pointer"
                onClick={handleOpen}
                className="nav__guide-line nav-item"
                style={{
                    border: "none",
                    outline: "none",
                    cursor: "pointer"
                }}
            >
                마이 스튜디오
            </span>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <TextField
                        label="Email address"
                        fullWidth
                        color="secondary"
                        value={props.email}
                        onChange={e=>props.handleInputChange(e,'email')}
                    />
                    <TextField 
                        label="Password" 
                        type="password"
                        fullWidth 
                        color="secondary"
                        value={props.password}
                        onChange={e=>props.handleInputChange(e,'password')}
                    />
                    <div
                        style={{
                            color: "#DE3621",
                            fontWeight: "bold"
                        }}
                    >
                        Forget password?
                    </div>
                    <div>
                        <span
                            style={{
                                fontWeight: "300",
                                opacity: "0.4"
                            }}
                        >
                            New to EmoticBox?{" "}
                        </span>
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "#DE3621"
                            }}
                        >
                            Join now
                        </span>
                    </div>
                    <span>
                        <Button
                            className={buttonClasses.Button}
                            variant="contained"
                            color="secondary"
                            buttonStyle={{ borderRadius: 50 }}
                            onClick={props.loginSubmit}
                        >
                            <span className="reg-btn--style">Login</span>
                        </Button>
                    </span>
                </div>
            </Modal>
        </span>
    );
}

export default LoginForm;