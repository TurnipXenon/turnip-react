export interface SlugGeneric<T> {
    params: T;
}

export interface DefaultSlug extends SlugGeneric<{ slug: string }> {
}

interface CurrentSlug {
    userId: string;
}

export interface UserRouteSlug extends SlugGeneric<CurrentSlug> {
}