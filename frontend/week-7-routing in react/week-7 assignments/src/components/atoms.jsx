import { atom } from 'recoil';

export const usernameState = atom({
    key: 'usernameState',
    default: ''
});

export const profileDataState = atom({
    key: 'profileDataState',
    default: null
});
