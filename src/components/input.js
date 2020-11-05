import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

export const Input = forwardRef((props, ref, children) => {
  return (
    <>
      <TextField
        inputProps={{ style: { fontSize: 14, fontFamily: 'Lato, san-serif' } }}
        InputLabelProps={{
          style: { fontSize: 14, fontFamily: 'Lato, san-serif' },
        }}
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        
        {...props}
        {...children}
      />
    </>
  );
});
