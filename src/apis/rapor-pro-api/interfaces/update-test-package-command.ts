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


// May contain unused imports in some cases
// @ts-ignore
import type { TestPackageDetailDto } from './test-package-detail-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { TestPackageType } from './test-package-type';

/**
 * 
 * @export
 * @interface UpdateTestPackageCommand
 */
export interface UpdateTestPackageCommand {
    /**
     * 
     * @type {number}
     * @memberof UpdateTestPackageCommand
     */
    'branchId'?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateTestPackageCommand
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateTestPackageCommand
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateTestPackageCommand
     */
    'price'?: number;
    /**
     * 
     * @type {Array<TestPackageDetailDto>}
     * @memberof UpdateTestPackageCommand
     */
    'tests'?: Array<TestPackageDetailDto> | null;
    /**
     * 
     * @type {Array<TestPackageType>}
     * @memberof UpdateTestPackageCommand
     */
    'vehicleCheckTypes'?: Array<TestPackageType>;
}

