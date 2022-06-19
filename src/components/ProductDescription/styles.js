import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10%",
    marginBottom: "10%",
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 900,
    height: 350,
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    padding: 10,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
