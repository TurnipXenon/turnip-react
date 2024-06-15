import {JobPosting} from "@/lib/openapi/index";

export const CURSOR_PARAMS = "cursorId";

export const createCursorParams = (postingList: JobPosting[]) => {
    const params = new URLSearchParams();

    if (postingList.length === 0) {
        return params;
    }

    params.append(CURSOR_PARAMS, postingList[postingList.length - 1].id);
    return params;
};
