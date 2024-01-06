import { ObjectId } from "mongodb";

export interface Artist {
  name: string;
  href: string;
}

export interface Single {
  id: string;
  coverart: string;
  title: string;
  artists: Artist[];
  youtube?: string | null;
  spotify?: string | null;
  apple?: string | null;
  createdAt?: Date;
}
