/* tslint:disable */
/* eslint-disable */
/**
 * Rapor Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface KeycloakTokenResponse
 */
export interface KeycloakTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof KeycloakTokenResponse
     */
    'accessToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof KeycloakTokenResponse
     */
    'refreshToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof KeycloakTokenResponse
     */
    'tokenType'?: string;
    /**
     * 
     * @type {number}
     * @memberof KeycloakTokenResponse
     */
    'expiresIn'?: number;
    /**
     * 
     * @type {number}
     * @memberof KeycloakTokenResponse
     */
    'refreshExpiresIn'?: number;
    /**
     * 
     * @type {string}
     * @memberof KeycloakTokenResponse
     */
    'scope'?: string;
}

