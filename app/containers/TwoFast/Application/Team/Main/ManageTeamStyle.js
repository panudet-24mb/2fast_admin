/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';
export const ManageTeamStyle = makeStyles({
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  divText: {
    marginRight: '15px',
  },
  headerText: {
    fontSize: '1.4rem',
    color:'#6c757d',
    margin: 0,
    textShadow: '0px 0px 1px black',
  },
  fab: {
    backgroundColor: '#2cbfce',
    // '&:hover': {
    //   backgroundColor: '#2cbfce',
    // },
  },
  dialogTextHeaderBox: {
    textAlign: 'center',
    paddingTop: '15px',
    paddingBottom: '5px',
  },
  dialogTextHeader: {
    margin: 0,
    fontSize: '1.9rem',
    fontWeight:'bold'
  },
  divForm: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  actionBox: {
    marginTop: '24px',
    marginBottom: '24px',
  },
  teamNameError: {
    textAlign: 'left',
    marginTop: '3px',
    marginLeft: '9px',
    color: 'red',
    fontWeight: 'bold',
  },
  // ----------- Team Card ---------- //
  paperItem: {
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  subPaperItem: {
    padding: 8,
    paddingLeft: '13px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  pinColor: {
    // borderColor: 'red',
    color: '#ff4d4d',
    borderLeft: '13px solid',
    borderRadius: '7px 0px 0px 7px',
  },
  itemHeaderText: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  cardHR: {
    paddingBottom: '1px',
    backgroundColor: '#dadada',
  },
  // ---------- CARD HEAD ----------- //
  cardTop: {
    paddingBottom: '10px',
  },
  teamLogo: {
    width: '91%',
    height: '66%',
    marginTop: '17px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 3px #ababab',
  },
  teamName: {},
  teamNameText: {
    textAlign: 'center',
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  teamNameAvatarBox: {
    marginTop: '8px',
  },
  teamNameAvatar: {
    justifyContent: 'center',
  },
  teamStatus: {
    textAlign: 'end',
    marginRight: '3px',
  },
  teamStatusIcon: {
    color: '#0aa031',
    fontSize: '1.6rem',
  },

  // ---------- CARD MIDDLE ----------- //
  cardMiddle: {
    paddingBottom: '5px',
  },
  desHead: {
    margin: 0,
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  desCon: {
    margin: 0,
    textAlign: 'center',
    fontSize: '0.8rem',
    height: '43px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  },
  desConText: {
    margin: 0,
  },

  // ---------- CARD BOTTOM ----------- //
  cardBottom: {
    marginTop: '7px',
    textAlign: 'center',
  },
  memberText1: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  memberText2: {
    margin: 0,
  },
});
