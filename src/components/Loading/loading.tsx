import React from 'react';
import GridWrapper from './GridWrapper';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Grid from '@mui/material/Grid';
const Loading = () => {
  return (
    <GridWrapper>
      <Grid container spacing={0} alignItems="center" alignContent="center">
        <CircularProgress />
      </Grid>
    </GridWrapper>
  );
};
export default Loading;
