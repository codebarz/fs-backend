import { createNamespace } from 'cls-hooked';

export const session = createNamespace('login-session');

const LOGGED_IN_USER_ID = 'loggedInUserID';
const CURRENT_USER_IS_ADMIN = 'loggedInUserIsAdmin';

export function setLoggedInUserID(id: string) {
  session.set(LOGGED_IN_USER_ID, id);
}

export function getLoggedInUserID(): string {
  return session.get(LOGGED_IN_USER_ID);
}

export function setUserIsAdmin(isAdmin: boolean) {
  session.set(CURRENT_USER_IS_ADMIN, isAdmin);
}

export function getCurrentUserIsAdmin() {
  return !!session.get(CURRENT_USER_IS_ADMIN);
}
