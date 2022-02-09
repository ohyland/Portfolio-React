import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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
            color: 'white',
            [theme.breakpoints.up('sm')]: {
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                // alignItems: 'center',
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
    const initialFormValue = {
        name: '',
        email: '',
        message: '',
    };
    const formId = 'PFUsPpdF';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const recaptchaKey = '6LcfBjkeAAAAALm1dSYqtvdhRqGliBLiXIhZWPrI';
    const recaptchaRef = useRef();

    const classes = useStyles();
    const [formValues, setFormValues] = useState(initialFormValue);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();
    const [open, setOpen] = useState(false);
    const [recapthaToken, setRecapthaToken] = useState('');

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { name, email, message } = formValues;
        setFormValues({
            Name: name,
            Email: email,
            Message: message,
        });
        setSubmitting(true);
        postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formValues,
            'g-recaptcha-response': recapthaToken,
        };
        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setOpen(true);
            setMessage('Thank you, Your message has been sent!');
            setFormValues(initialFormValue);
            recaptchaRef.current.reset();
        } catch (error) {
            setMessage('Sorry, there was a problem, please try again');
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateRecaptchaToken = (token) => {
        setRecapthaToken(token);
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
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchaToken}
                    />

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
                        <ListItem
                            href="https://www.linkedin.com/in/olivia-hyland-79775317b/"
                            target="_blank"
                        >
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText>{'LinkedIn'}</ListItemText>
                        </ListItem>
                        <ListItem
                            href="https://github.com/ohyland"
                            target="_blank"
                        >
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText>{'Github'}</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText>
                                {'1oliviahyland@gmail.com'}
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </div>
        </>
    );
};

export default Contact;
