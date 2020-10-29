/* eslint-disable */
import React, { useEffect } from 'react';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
// import PropTypes from 'prop-types';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Chip from '@material-ui/core/Chip';

import Search from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

import { TEAM_LIST } from '../dummy-data/dummy-team';

const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      // MUIDataTable: {
      //   root: {
      //     backgroundColor: '#FF000',
      //   },
      // },
      // MUIDataTableBodyCell: {
      //   root: {
      //     backgroundColor: '#FF0000',
      //   },
      // },
    },
  });

const useStyles = makeStyles((theme) => ({
  table: {
    '& > div': {
      overflow: 'auto',
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
  },
}));

const AdvFilter = (props) => {
  console.log(props);
  useEffect(() => {
    console.log(TEAM_LIST);
  }, []);

  const classes = useStyles();

  const tableData = [];
  TEAM_LIST.map((el) => {
    tableData.push([el.teamName, el.leader, el.members]);
  });

  const state = {
    columns: [
      {
        name: 'Team Name',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <div style={{ width: '10%' }}>{value}</div>;
          },
        },
      },
      {
        name: 'Leader',
        options: {
          filter: true,
        },
      },
      {
        name: 'Members',
        options: {
          filter: true,
          customBodyRender: (value) => {
            return <div>{value}</div>;
          },
        },
      },
      {
        name: '',
        options: {
          filter: false,
          customBodyRender: (value) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '65%',
                }}
              >
                <Fab color="primary" size="small">
                  <Search />
                </Fab>
              </div>
            );
          },
        },
      },
      //   {
      //     name: 'KPI',
      //     options: {
      //       filter: false,
      //       customBodyRender: (value) => (
      //         <LinearProgress
      //           variant="determinate"
      //           color="secondary"
      //           value={value}
      //         />
      //       ),
      //     },
      //   },
      //   {
      //     name: 'Status',
      //     options: {
      //       filter: true,
      //       customBodyRender: (value) => {
      //         if (value === 'active') {
      //           return <Chip label="Active" color="secondary" />;
      //         }
      //         if (value === 'non-active') {
      //           return <Chip label="Non Active" color="primary" />;
      //         }
      //         return <Chip label="Unknown" />;
      //       },
      //     },
      //   },
      //   {
      //     name: 'Salary',
      //     options: {
      //       filter: true,
      //       customBodyRender: (value) => {
      //         const nf = new Intl.NumberFormat('en-US', {
      //           style: 'currency',
      //           currency: 'USD',
      //           minimumFractionDigits: 2,
      //           maximumFractionDigits: 2,
      //         });

      //         return nf.format(value);
      //       },
      //     },
      //   },
    ],
    data: tableData,
  };
  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    page: 0,
  };
  return (
    <div className={classes.table}>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title="Team list"
          data={state.data}
          columns={state.columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default AdvFilter;
