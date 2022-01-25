import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import {
    Button,
    TextField,
    Typography,
    Alert,
    Snackbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    Email as EmailIcon,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    contactPage: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },

        '& .contactDetails': {
            [theme.breakpoints.up('sm')]: {
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            },
        },
    },
    form: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50%',
        },

        '& input': {
            color: 'white',
            fontStyle: 'italic',
        },
        '& .MuiOutlinedInput-root': {
            marginBottom: '10px',
            backgroundColor: '#1a1a1a',
        },
    },
}));

const Contact = () => {
    const formId = 'PFUsPpdF';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const classes = useStyles();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();
    const [open, setOpen] = useState(false);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { name, email, message } = formValues;
        setFormValues({ Name: name, Email: email, Message: message });
        setSubmitting(true);
        postSubmission();
        setSubmitting(false);
        setFormValues({});
    };

    const postSubmission = async () => {
        const payload = formValues;
        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log('result: ', result);
            setOpen(true);
            setMessage('Thank you, Your message has been sent!');
        } catch (error) {
            setMessage('Sorry, there was a problem, please try again');
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Typography variant="h4">Contact Me</Typography>
            <div className={classes.contactPage}>
                <form className={classes.form} onSubmit={onSubmitForm}>
                    <div>
                        <TextField
                            fullWidth
                            placeholder="Name"
                            required
                            onChange={(event) =>
                                setFormValues({
                                    ...formValues,
                                    name: event.target.value,
                                })
                            }
                        ></TextField>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(event) =>
                                setFormValues({
                                    ...formValues,
                                    email: event.target.value,
                                })
                            }
                        ></TextField>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            required
                            placeholder="Type your message here..."
                            onChange={(event) =>
                                setFormValues({
                                    ...formValues,
                                    message: event.target.value,
                                })
                            }
                        ></TextField>
                    </div>
                    <div>
                        <Button
                            disabled={submitting}
                            variant="contained"
                            type="submit"
                        >
                            {submitting ? 'Submitting' : 'Submit'}
                        </Button>
                    </div>
                    {message && (
                        <Snackbar
                            open={open}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            autoHideDuration={6000}
                            onClose={handleClose}
                        >
                            <Alert
                                onClose={handleClose}
                                severity={message ? 'success' : 'error'}
                                sx={{ width: '100%' }}
                            >
                                {message}
                            </Alert>
                        </Snackbar>
                    )}
                </form>
                <div className="contactDetails">
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText>{'LinkedIn'}</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText>{'Github'}</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText>{'Email'}</ListItemText>
                        </ListItem>
                    </List>
                </div>
            </div>
        </>
    );
};

export default Contact;
