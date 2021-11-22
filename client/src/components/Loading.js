import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const isLoading = useSelector(state => state.auth.isLoading)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <>
     {isLoading &&<div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} color="secondary"/>
    </div>}
    </>
  );
}
  
