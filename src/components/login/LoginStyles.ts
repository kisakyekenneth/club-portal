import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';

export const loginStyles = makeStyles((theme: Theme) => {
  createStyles({
    main: { width: '600', height: '400', display: 'block' },
    main_card: { width: 'auto' },
  });
});
