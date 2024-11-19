import React from 'react';
import Button from '@mui/material/Button';

const BookingButton = ({ label, onClick, disabled, ...props }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        appearance: 'button',
        backfaceVisibility: 'hidden',
        backgroundColor: '#3f51b5',
        borderRadius: '6px',
        borderWidth: 0,
        boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: '-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
        fontSize: '100%',
        height: '44px',
        lineHeight: 1.15,
        outline: 'none',
        overflow: 'hidden',
        padding: '0 25px',
        position: 'relative',
        textAlign: 'center',
        textTransform: 'none',
        transform: 'translateZ(0)',
        transition: 'all .2s, box-shadow .08s ease-in',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        width: '100%',
        '&:focus': {
          boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px',
        },
        '&:hover': {
          boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0',
          backgroundColor: '#3e4fc1',
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: '#9fa8da',
          boxShadow: 'none',
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default BookingButton;
