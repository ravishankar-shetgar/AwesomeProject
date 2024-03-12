import uuid from 'react-native-uuid';

export const getRandomUuid = (): string => {
  return uuid.v4().toString();
};
