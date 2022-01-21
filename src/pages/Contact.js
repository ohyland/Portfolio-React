import React, { useState } from 'react';
import { Button, TextField, Typography, Alert, Snackbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
    form: {
        '& input': {
            color: 'white',
            fontStyle: 'italic',
        },
        '& .MuiOutlinedInput-root': {
            marginBottom: '10px',
            backgroundColor: '#1a1a1a',
        },
    },
});

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
        <div>
            <Typography variant="h4">Contact Me</Typography>
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
        </div>
    );
};

export default Contact;
