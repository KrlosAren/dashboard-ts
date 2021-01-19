export interface Menu {
  name: string;
}

export interface Settings {
  setting: string;
  icon: string;
}

export interface EventsProps {
  id: number;
  date: string;
  location: string;
  description: string;
}
export interface EventType {
  event: EventsProps;
}

export interface FriendProps {
  id: number;
  name: string;
  img: string;
}
export interface FriendType {
  friend: FriendProps;
}
