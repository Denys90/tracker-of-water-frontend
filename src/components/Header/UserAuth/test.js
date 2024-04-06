import { Button, Popover } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { SignInIcon, UserAuthBtn } from './UserAuth.styled';
import sprite from 'assets/images/icons.svg';

function UserAuth() {
  return (
    <>
      <NavLink to="/login">
        <UserAuthBtn type="button">
          Sign in
          <SignInIcon>
            <use href={`${sprite}#icon-user`} />
          </SignInIcon>
        </UserAuthBtn>
      </NavLink>
      <Button type="button">
        <use href={`${sprite}#icon-user`} />
        Here
      </Button>
      <Popover
        aria-labelledby="default-popover"
        content={
          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3
                id="default-popover"
                className="font-semibold text-gray-900 dark:text-white"
              >
                Popover title
              </h3>
            </div>
            <div className="px-3 py-2">
              <p>And heres some amazing content. Its very engaging. Right?</p>
            </div>
          </div>
        }
      >
        <Button>Default popover</Button>
      </Popover>
    </>
  );
}

export default UserAuth;
