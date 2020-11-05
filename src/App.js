import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Form } from './components/form';
import { Dashboard } from './components/dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1024px',
    background: '#ECF6FE',
  },
}));

function App() {
  const styles = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={styles.root} container="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
