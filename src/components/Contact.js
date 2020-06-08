import React, { Fragment } from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  form: {
    top: '50%',
    transform: 'translateY(-50%)',
    position: 'absolute',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <Box component='div' style={{ background: '#233', height: '100vh' }}>
        <Grid container justify='center'>
          <Box component='form' className={classes.form}>
            <Typography
              variant='h5'
              style={{
                color: 'tomato',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              hire or contact me...
            </Typography>
            <InputField
              fullWidth={true}
              label='Name'
              variant='outlined'
              inputProps={{
                style: {
                  color: 'white',
                },
              }}
              margin='dense'
              size='medium'
            />
            <InputField
              fullWidth={true}
              label='Email'
              variant='outlined'
              inputProps={{
                style: {
                  color: 'white',
                },
              }}
              margin='dense'
              size='medium'
            />
            <InputField
              fullWidth={true}
              label='Company Name'
              variant='outlined'
              inputProps={{
                style: {
                  color: 'white',
                },
              }}
              margin='dense'
              size='medium'
            />

            <br />

            <Button
              variant='outlined'
              fullWidth={true}
              endIcon={<SendIcon />}
              className={classes.button}
            >
              Contact me
            </Button>
          </Box>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Contact;
