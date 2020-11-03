/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';
export const CardInfoStyle = makeStyles({
  div: {
    padding: 15,
    fontFamily: 'Prompt',
  },
  paperCard: {
    borderRadius: '8px',
    height: '120px',
  },
  card: {
    padding: 10,
    cursor: 'pointer',
  },
  // ------------------------------ Add new team ---------------------------- //
  buttonBase: {
    width: '100%',
    height: '100%',
  },
  newteamCard: {
    width: '100%',
    height: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '0.13rem solid',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // borderStyle: 'dashed',
    borderColor: '#4dabf5',
    // background: '#fbfbfb',
  },
  newteamCardUser: {
    width: '100%',
    height: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '0.13rem solid',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    // borderStyle: 'dashed',
    borderColor: '#f79c65',
    // background: '#fbfbfb',
  },
  newteamContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newteamAddIcon: {
    fontSize: '4rem',
    color: '#4dabf5',
  },
  newteamText: {
    margin: 0,
    paddingLeft: '7px',
    fontSize: '1.2rem',
  },

  // ------------------------------ TeamCard ---------------------------- //
  topCard: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '9px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  teamLogo: {
    padding: '27px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 3px #ababab',
  },
  teamName: {
    width: '100%',
    height:'100%',
    color:'#6c757d',
    alignSelf: 'center',
    fontSize: '1.2rem',
    paddingLeft: '10px',
    fontWeight: 'bold',
    marginLeft:"20px"
  },
  activeIconBox: {
    // width: '100%',
    textAlign: 'end',
  },
  activeIcon: {
    color: '#4dc17b',
    position: 'relative',
    left: '13px',
    bottom: '10px',
    fontSize: '30px',
  },
  bottomCard: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '8px',
  },

});
