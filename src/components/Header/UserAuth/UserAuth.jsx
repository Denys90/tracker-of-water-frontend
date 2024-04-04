import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignInIcon, UserAuthBtn, Button } from './UserAuth.styled';
import sprite from 'assets/images/icons.svg';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export const UserAuth = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-auth-popover' : undefined;

  return (
    <div>
      <NavLink to="/login">
        <UserAuthBtn type="button">
          Sign in
          <SignInIcon>
            <use href={`${sprite}#icon-user`} />
          </SignInIcon>
        </UserAuthBtn>
      </NavLink>
      <Button type="button" onClick={handleClick}>
      <SignInIcon>
        <use href={`${sprite}#icon-down`} />
      </SignInIcon>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>Content of the popover</Typography>
      </Popover>
    </div>
  );
};