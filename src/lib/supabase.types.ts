export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string
          id: string
          tweet_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id: string
          tweet_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          tweet_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_tweet_id_fkey"
            columns: ["tweet_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      hashtags: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          id: string
          tweet_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id: string
          tweet_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_tweet_id_fkey"
            columns: ["tweet_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      "New Table": {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      replies: {
        Row: {
          id: string
          reply_id: string | null
          text: string
          tweet_id: string | null
          user_id: string
        }
        Insert: {
          id: string
          reply_id?: string | null
          text: string
          tweet_id?: string | null
          user_id: string
        }
        Update: {
          id?: string
          reply_id?: string | null
          text?: string
          tweet_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "replies_reply_id_fkey"
            columns: ["reply_id"]
            referencedRelation: "replies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_tweet_id_fkey"
            columns: ["tweet_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      tweet_hashtag: {
        Row: {
          hashtag_id: string
          tweet_id: string
        }
        Insert: {
          hashtag_id: string
          tweet_id: string
        }
        Update: {
          hashtag_id?: string
          tweet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tweet_hashtag_hashtag_id_fkey"
            columns: ["hashtag_id"]
            referencedRelation: "hashtags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tweet_hashtag_tweet_id_fkey"
            columns: ["tweet_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          }
        ]
      }
      tweets: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          profile_id: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          text?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tweets_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}