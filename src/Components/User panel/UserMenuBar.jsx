import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './MenuBar.css';
import logo from '../../Logo.png';
import { Outlet } from 'react-router-dom';

const UserMenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOpenNavMenu = () => {
    !anchorElNav ? setAnchorElNav(true) : setAnchorElNav(false);
  };

  return (
    <Container fluid className="p-0">
      <Row className=" positionFixed">
        <Col sm={12} className="p-0">
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  className=" align-items-center"
                >
                  <img src={logo} alt="logo" style={{ width: '5rem' }} />
                  Chit Home Fund
                </Typography>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  className=" align-items-center "
                >
                  <img src={logo} alt="logo" style={{ width: '5rem' }} />
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </Col>
      </Row>
      <div className="row" style={{ 'margin-top': '4rem' }}>
        <div
          className={
            anchorElNav
              ? 'closeMenuBar p-0'
              : 'openMenuBar p-0 col-sm-2 position-fixed'
          }
        >
          <div>
            <ListGroup className=" rounded-0 ">
              <LinkContainer
                to="dashboard"
                onClick={() => setAnchorElNav(true)}
              >
                <ListGroup.Item action>DashBoard</ListGroup.Item>
              </LinkContainer>

              <LinkContainer onClick={() => setAnchorElNav(true)} to="allFund">
                <ListGroup.Item action>All Fund</ListGroup.Item>
              </LinkContainer>
              <LinkContainer onClick={() => setAnchorElNav(true)} to="profile">
                <ListGroup.Item action>Profile</ListGroup.Item>
              </LinkContainer>
              <LinkContainer
                onClick={() => setAnchorElNav(true)}
                to="passwordChange"
              >
                <ListGroup.Item action>Change Password</ListGroup.Item>
              </LinkContainer>
              <LinkContainer
                onClick={() => setAnchorElNav(true)}
                to="Notification"
              >
                <ListGroup.Item action>Notification</ListGroup.Item>
              </LinkContainer>
              <LinkContainer onClick={() => setAnchorElNav(true)} to="help">
                <ListGroup.Item action>Help</ListGroup.Item>
              </LinkContainer>
            </ListGroup>
          </div>
        </div>
        <div
          className={
            anchorElNav
              ? 'col topMargin2 d-flex justify-content-center align-items-center'
              : 'p-0 col-sm-10 offset-sm-2 topMargin  d-flex justify-content-center align-items-center'
          }
        >
          <Outlet />
        </div>
      </div>
    </Container>
  );
};
export default UserMenuBar;
