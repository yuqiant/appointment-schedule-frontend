import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Provider } from 'react-redux';
import SchedulingCalendar from './components/SchedulingCalendar';
import UpcomingAppointments from './components/UpcomingAppointments';
import store from './store';
import DateFnsUtils from '@date-io/date-fns'; // Import date-io utils
import { MuiPickersUtilsProvider } from '@material-ui/pickers'; // Import the provider

function App() {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Appointment Scheduler
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Schedule Appointment
              </Button>
              <Button color="inherit" component={Link} to="/appointments">
                Upcoming Appointments
              </Button>
            </Toolbar>
          </AppBar>
          <Container style={{ marginTop: '20px' }}>
            <Routes>
              <Route path="/" element={<SchedulingCalendar />} />
              <Route path="/appointments" element={<UpcomingAppointments />} />
            </Routes>
          </Container>
        </Router>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
