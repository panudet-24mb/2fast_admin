/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';
export const AdminLoginStyle = makeStyles({
  page: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10%',
  },
  content: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  imgBox: {
    height: '44%',
  },
  logo: {
    width: '85%',
    marginLeft: '5%',
  },
  actionContent: {},
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: { width: '72%' },
  buttonBox: { width: '72%', marginTop: '17px' },
  actionButton: { width: '100%', borderRadius: '40px' },
  errorMessage: {
    color: 'red',
    textAlign: 'start',
    marginLeft: '7px',
    marginTop: '5px',
    fontWeight: 'bold',
  },
});
