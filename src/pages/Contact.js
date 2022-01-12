import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    form: {
        width: '50%',
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
    const classes = useStyles();
    const [values, setValue] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { name, email, message } = values;
        console.log('Name: ', name, 'Email: ', email, 'Message: ', message);
    };

    return (
        <div>
            <Typography variant="h4">Contact Me</Typography>
            <form className={classes.form} onSubmit={onSubmitForm}>
                <div>
                    <TextField
                        fullWidth
                        placeholder="Firstname"
                        required
                        onChange={(event) =>
                            setValue({ ...values, name: event.target.value })
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
                            setValue({ ...values, email: event.target.value })
                        }
                    ></TextField>
                </div>
                <div>
                    <TextField
                        fullWidth
                        required
                        placeholder="Type your message here..."
                        onChange={(event) =>
                            setValue({ ...values, message: event.target.value })
                        }
                    ></TextField>
                </div>
                <div>
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </div>
                {/* <p>name: {values.name}</p>
                <p>email: {values.email}</p>
                <p>message: {values.message}</p> */}
            </form>
        </div>
    );
};

export default Contact;
