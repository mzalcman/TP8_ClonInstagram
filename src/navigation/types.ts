export type HomeStackParamList = {
  Home: undefined;
  Post: {
    id: string;
    postData?: any;
    fromProfile?: boolean;
  };
};

export type MainTabParamList = {
  HomeStack: undefined;
  SearchPlaceholder: undefined;
  ReelsPlaceholder: undefined;
  MessagesPlaceholder: undefined;
  Profile: undefined;
};