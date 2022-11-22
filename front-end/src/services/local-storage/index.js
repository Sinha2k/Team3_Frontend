/* eslint-disable import/no-anonymous-default-export */
const PREFIX = `local::`;

function set(key, value) {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(PREFIX + key, serializedValue);
  } catch (error) {
    throw new Error("store serialization failed");
  }
}

function get(key) {
  if (!localStorage) {
    return;
  }

  try {
    const serializedValue = localStorage.getItem(PREFIX + key);
    if (!serializedValue) {
      return;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}

function removeItem(key) {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.removeItem(PREFIX + key);
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}

function removeAllItem() {
  if (!localStorage) {
    return;
  }
  try {
    localStorage.clear();
  } catch (error) {
    throw new Error("store deserialization failed");
  }
}

// export const OAUTH_TOKEN = "mes_access_token";
// export const REFRESH_TOKEN = "mes_refresh_token";
// export const USER_PROFILE = "mes_user_profile";

export default {
  get,
  set,
  removeItem,
  removeAllItem,
};
