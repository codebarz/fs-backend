export interface User {
  id: string;
  user_name: string;
  email: string;
  password: string;
  avatar_url: string;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Admin {
  id: string;
  user_id: string;
  is_super: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Post {
  id: string;
  user_id: string;
  post_content: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  comment: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Reply {
  id: string;
  comment_id: string;
  reply_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Favourite {
  id: string;
  user_id: string;
  post_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface Badge {
  id: string;
  name: string;
  point: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface UserBadge {
  id: string;
  badge_id: string;
  assigned_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}
