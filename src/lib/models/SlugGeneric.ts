export interface SlugGeneric<T> {
    params: T;
}

export interface DefaultSlug extends SlugGeneric<{ slug: string }> {
}

interface UserSlug {
    userId: string;
}

interface SessionSlug {
    userId: string;
    sessionId: string;
}

export interface UserRouteSlug extends SlugGeneric<UserSlug> {
}

export interface SessionRouteSlug extends SlugGeneric<SessionSlug> {
}