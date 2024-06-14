import {useEffect} from "react";

export const useEffectOnce = (fn: () => void) => {
    // eslint-disable-next-line
    useEffect(fn, []);
}