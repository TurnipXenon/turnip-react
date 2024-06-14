/* tslint:disable */
/* eslint-disable */
/**
 * Turnip React API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ApiJobTrackerUsersUserIdSessionsGetRequest
 */
export interface ApiJobTrackerUsersUserIdSessionsGetRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiJobTrackerUsersUserIdSessionsGetRequest
     */
    'title'?: string;
}
/**
 * 
 * @export
 * @interface ApiLoginPostRequest
 */
export interface ApiLoginPostRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiLoginPostRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof ApiLoginPostRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface JobSession
 */
export interface JobSession {
    /**
     * 
     * @type {string}
     * @memberof JobSession
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof JobSession
     */
    'userId': string;
    /**
     * 
     * @type {string}
     * @memberof JobSession
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof JobSession
     */
    'startDate': string;
    /**
     * 
     * @type {string}
     * @memberof JobSession
     */
    'endDate': string;
    /**
     * 
     * @type {boolean}
     * @memberof JobSession
     */
    'isPublic': boolean;
}
/**
 * 
 * @export
 * @interface PublicUser
 */
export interface PublicUser {
    /**
     * 
     * @type {string}
     * @memberof PublicUser
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof PublicUser
     */
    'id': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all job sessions for the user
         * @param {string} userId The user ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsGet: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsGet', 'userId', userId)
            const localVarPath = `/api/job-tracker/users/{userId}/sessions`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create new job session
         * @param {string} userId The user ID
         * @param {ApiJobTrackerUsersUserIdSessionsGetRequest} apiJobTrackerUsersUserIdSessionsGetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsPost: async (userId: string, apiJobTrackerUsersUserIdSessionsGetRequest: ApiJobTrackerUsersUserIdSessionsGetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsPost', 'userId', userId)
            // verify required parameter 'apiJobTrackerUsersUserIdSessionsGetRequest' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsPost', 'apiJobTrackerUsersUserIdSessionsGetRequest', apiJobTrackerUsersUserIdSessionsGetRequest)
            const localVarPath = `/api/job-tracker/users/{userId}/sessions`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(apiJobTrackerUsersUserIdSessionsGetRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsSessionIdDelete: async (userId: string, sessionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdDelete', 'userId', userId)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdDelete', 'sessionId', sessionId)
            const localVarPath = `/api/job-tracker/users/{userId}/sessions/{sessionId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsSessionIdGet: async (userId: string, sessionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdGet', 'userId', userId)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdGet', 'sessionId', sessionId)
            const localVarPath = `/api/job-tracker/users/{userId}/sessions/{sessionId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {JobSession} jobSession 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsSessionIdPut: async (userId: string, sessionId: string, jobSession: JobSession, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdPut', 'userId', userId)
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdPut', 'sessionId', sessionId)
            // verify required parameter 'jobSession' is not null or undefined
            assertParamExists('apiJobTrackerUsersUserIdSessionsSessionIdPut', 'jobSession', jobSession)
            const localVarPath = `/api/job-tracker/users/{userId}/sessions/{sessionId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"sessionId"}}`, encodeURIComponent(String(sessionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jobSession, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Login as a users to be able to do more things in the website
         * @param {ApiLoginPostRequest} apiLoginPostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLoginPost: async (apiLoginPostRequest: ApiLoginPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'apiLoginPostRequest' is not null or undefined
            assertParamExists('apiLoginPost', 'apiLoginPostRequest', apiLoginPostRequest)
            const localVarPath = `/api/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(apiLoginPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all job sessions for the user
         * @param {string} userId The user ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobTrackerUsersUserIdSessionsGet(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<JobSession>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobTrackerUsersUserIdSessionsGet(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create new job session
         * @param {string} userId The user ID
         * @param {ApiJobTrackerUsersUserIdSessionsGetRequest} apiJobTrackerUsersUserIdSessionsGetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobTrackerUsersUserIdSessionsPost(userId: string, apiJobTrackerUsersUserIdSessionsGetRequest: ApiJobTrackerUsersUserIdSessionsGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobSession>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobTrackerUsersUserIdSessionsPost(userId, apiJobTrackerUsersUserIdSessionsGetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobTrackerUsersUserIdSessionsSessionIdDelete(userId: string, sessionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobTrackerUsersUserIdSessionsSessionIdDelete(userId, sessionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobTrackerUsersUserIdSessionsSessionIdGet(userId: string, sessionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobSession>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobTrackerUsersUserIdSessionsSessionIdGet(userId, sessionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {JobSession} jobSession 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobTrackerUsersUserIdSessionsSessionIdPut(userId: string, sessionId: string, jobSession: JobSession, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobSession>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobTrackerUsersUserIdSessionsSessionIdPut(userId, sessionId, jobSession, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Login as a users to be able to do more things in the website
         * @param {ApiLoginPostRequest} apiLoginPostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiLoginPost(apiLoginPostRequest: ApiLoginPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiLoginPost(apiLoginPostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all job sessions for the user
         * @param {string} userId The user ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsGet(userId: string, options?: any): AxiosPromise<Array<JobSession>> {
            return localVarFp.apiJobTrackerUsersUserIdSessionsGet(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create new job session
         * @param {string} userId The user ID
         * @param {ApiJobTrackerUsersUserIdSessionsGetRequest} apiJobTrackerUsersUserIdSessionsGetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsPost(userId: string, apiJobTrackerUsersUserIdSessionsGetRequest: ApiJobTrackerUsersUserIdSessionsGetRequest, options?: any): AxiosPromise<JobSession> {
            return localVarFp.apiJobTrackerUsersUserIdSessionsPost(userId, apiJobTrackerUsersUserIdSessionsGetRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsSessionIdDelete(userId: string, sessionId: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiJobTrackerUsersUserIdSessionsSessionIdDelete(userId, sessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsSessionIdGet(userId: string, sessionId: string, options?: any): AxiosPromise<JobSession> {
            return localVarFp.apiJobTrackerUsersUserIdSessionsSessionIdGet(userId, sessionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update job session
         * @param {string} userId The user ID
         * @param {string} sessionId The session ID
         * @param {JobSession} jobSession 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobTrackerUsersUserIdSessionsSessionIdPut(userId: string, sessionId: string, jobSession: JobSession, options?: any): AxiosPromise<JobSession> {
            return localVarFp.apiJobTrackerUsersUserIdSessionsSessionIdPut(userId, sessionId, jobSession, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Login as a users to be able to do more things in the website
         * @param {ApiLoginPostRequest} apiLoginPostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLoginPost(apiLoginPostRequest: ApiLoginPostRequest, options?: any): AxiosPromise<PublicUser> {
            return localVarFp.apiLoginPost(apiLoginPostRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get all job sessions for the user
     * @param {string} userId The user ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiJobTrackerUsersUserIdSessionsGet(userId: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiJobTrackerUsersUserIdSessionsGet(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create new job session
     * @param {string} userId The user ID
     * @param {ApiJobTrackerUsersUserIdSessionsGetRequest} apiJobTrackerUsersUserIdSessionsGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiJobTrackerUsersUserIdSessionsPost(userId: string, apiJobTrackerUsersUserIdSessionsGetRequest: ApiJobTrackerUsersUserIdSessionsGetRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiJobTrackerUsersUserIdSessionsPost(userId, apiJobTrackerUsersUserIdSessionsGetRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete job session
     * @param {string} userId The user ID
     * @param {string} sessionId The session ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiJobTrackerUsersUserIdSessionsSessionIdDelete(userId: string, sessionId: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiJobTrackerUsersUserIdSessionsSessionIdDelete(userId, sessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get job session
     * @param {string} userId The user ID
     * @param {string} sessionId The session ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiJobTrackerUsersUserIdSessionsSessionIdGet(userId: string, sessionId: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiJobTrackerUsersUserIdSessionsSessionIdGet(userId, sessionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update job session
     * @param {string} userId The user ID
     * @param {string} sessionId The session ID
     * @param {JobSession} jobSession 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiJobTrackerUsersUserIdSessionsSessionIdPut(userId: string, sessionId: string, jobSession: JobSession, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiJobTrackerUsersUserIdSessionsSessionIdPut(userId, sessionId, jobSession, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Login as a users to be able to do more things in the website
     * @param {ApiLoginPostRequest} apiLoginPostRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiLoginPost(apiLoginPostRequest: ApiLoginPostRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiLoginPost(apiLoginPostRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


