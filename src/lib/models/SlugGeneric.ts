export interface SlugGeneric<T> {
    params: T;
}

export interface DefaultSlug extends SlugGeneric<{ slug: string }> {
}

interface UserSlug {
    userId: string;
}

interface SessionSlug {
    sessionId: string;
}

interface PostingSlug {
    postingId: string;
}

export interface UserRouteSlug extends SlugGeneric<UserSlug> {
}

export interface SessionRouteSlug extends SlugGeneric<SessionSlug> {
}

export interface PostingRouteSlug extends SlugGeneric<PostingSlug> {
}