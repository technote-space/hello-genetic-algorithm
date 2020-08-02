import React, {useMemo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useStoreContext} from '@technote-space/ga-framework';
import {sprintf} from 'sprintf-js';

const useStyles = makeStyles(() => ({
  wrap: {
    background: '#555',
    marginTop: 10,
    padding: 5,
  },
  param: {
    margin: 5,
  },
}));

export default function Statistics() {
  const {store: {logic: {fitness, progress}}} = useStoreContext();
  const classes = useStyles();

  return useMemo(() => <div className={classes.wrap}>
    <div>
      <div className={classes.param}>
        Progress: {sprintf('%.4f', progress)}
      </div>
      <div className={classes.param}>
        Fitness: {sprintf('%.3f', fitness)}
      </div>
    </div>
  </div>, [progress, classes]);
}
