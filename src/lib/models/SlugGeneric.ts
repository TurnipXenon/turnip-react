export interface SlugGeneric<T> {
    params: T;
}

export type DefaultSlug = SlugGeneric<{ slug: string }>;

interface UserSlug {
    userId: string;
}

interface SessionSlug {
    sessionId: string;
}

interface PostingSlug {
    postingId: string;
}

interface EventSlug {
    eventId: string;
}

export type UserRouteSlug = SlugGeneric<UserSlug>;

export type SessionRouteSlug = SlugGeneric<SessionSlug>;

export type PostingRouteSlug = SlugGeneric<PostingSlug>;

export type EventRouteSlug = SlugGeneric<EventSlug>;
