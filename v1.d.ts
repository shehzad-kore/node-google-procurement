/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace cloudcommerceprocurement_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Cloud Commerce Partner Procurement API
     *
     * Partner API for the Cloud Commerce Procurement Service.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
     * ```
     */
    export class Cloudcommerceprocurement {
        context: APIRequestContext;
        providers: Resource$Providers;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Represents an account that was established by the customer on the service provider's system.
     */
    export interface Schema$Account {
        /**
         * Output only. The approvals for this account. These approvals are used to track actions that are permitted or have been completed by a customer within the context of the provider. This might include a sign up flow or a provisioning step, for example, that the provider can admit to having happened.
         */
        approvals?: Schema$Approval[];
        /**
         * Output only. The creation timestamp.
         */
        createTime?: string | null;
        /**
         * Output only. The custom properties that were collected from the user to create this account.
         */
        inputProperties?: {
            [key: string]: any;
        } | null;
        /**
         * Output only. The resource name of the account. Account names have the form `accounts/{account_id\}`.
         */
        name?: string | null;
        /**
         * Output only. The identifier of the service provider that this account was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.
         */
        provider?: string | null;
        /**
         * Output only. The state of the account. This is used to decide whether the customer is in good standing with the provider and is able to make purchases. An account might not be able to make a purchase if the billing account is suspended, for example.
         */
        state?: string | null;
        /**
         * Output only. The last update timestamp.
         */
        updateTime?: string | null;
    }
    /**
     * An approval for some action on an account.
     */
    export interface Schema$Approval {
        /**
         * Output only. The name of the approval.
         */
        name?: string | null;
        /**
         * Output only. An explanation for the state of the approval.
         */
        reason?: string | null;
        /**
         * Output only. The state of the approval.
         */
        state?: string | null;
        /**
         * Optional. The last update timestamp of the approval.
         */
        updateTime?: string | null;
    }
    /**
     * Request message for PartnerProcurementService.ApproveAccount.
     */
    export interface Schema$ApproveAccountRequest {
        /**
         * The name of the approval being approved. If absent and there is only one approval possible, that approval will be granted. If absent and there are many approvals possible, the request will fail with a 400 Bad Request. Optional.
         */
        approvalName?: string | null;
        /**
         * Set of properties that should be associated with the account. Optional.
         */
        properties?: {
            [key: string]: string;
        } | null;
        /**
         * Free form text string explaining the approval reason. Optional. Max allowed length: 256 bytes. Longer strings will be truncated.
         */
        reason?: string | null;
    }
    /**
     * Request message for [PartnerProcurementService.ApproveEntitlementPlanChange[].
     */
    export interface Schema$ApproveEntitlementPlanChangeRequest {
        /**
         * Name of the pending plan that is being approved. Required.
         */
        pendingPlanName?: string | null;
    }
    /**
     * Request message for [PartnerProcurementService.ApproveEntitlement[].
     */
    export interface Schema$ApproveEntitlementRequest {
        /**
         * Optional. The resource name of the entitlement that was migrated. Format: providers/{provider_id\}/entitlements/{entitlement_id\}. Should only be sent when resources have been migrated from entitlement_migrated to the new entitlement. Optional.
         */
        entitlementMigrated?: string | null;
        /**
         * Set of properties that should be associated with the entitlement. Optional.
         */
        properties?: {
            [key: string]: string;
        } | null;
    }
    /**
     * A resource using (consuming) this entitlement.
     */
    export interface Schema$Consumer {
        /**
         * A project name with format `projects/`.
         */
        project?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * Represents a procured product of a customer.
     */
    export interface Schema$Entitlement {
        /**
         * Output only. The resource name of the account that this entitlement is based on, if any.
         */
        account?: string | null;
        /**
         * Output only. The resources using this entitlement, if applicable.
         */
        consumers?: Schema$Consumer[];
        /**
         * Output only. The creation timestamp.
         */
        createTime?: string | null;
        /**
         * Output only. The custom properties that were collected from the user to create this entitlement.
         */
        inputProperties?: {
            [key: string]: any;
        } | null;
        /**
         * Provider-supplied message that is displayed to the end user. Currently this is used to communicate progress and ETA for provisioning. This field can be updated only when a user is waiting for an action from the provider, i.e. entitlement state is EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED or EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL. This field is cleared automatically when the entitlement state changes.
         */
        messageToUser?: string | null;
        /**
         * Output only. The resource name of the entitlement. Entitlement names have the form `providers/{provider_id\}/entitlements/{entitlement_id\}`.
         */
        name?: string | null;
        /**
         * Output only. The end time of the new offer. Field is empty if the pending plan change is not moving to an offer. If the offer was created with a term instead of a specified end date, this field is empty.
         */
        newOfferEndTime?: string | null;
        /**
         * Output only. The name of the offer the entitlement is switching to upon a pending plan change. Only exists if the pending plan change is moving to an offer. Format: 'projects/{project\}/services/{service\}/privateOffers/{offer-id\}' OR 'projects/{project\}/services/{service\}/standardOffers/{offer-id\}', depending on whether the offer is private or public.
         */
        newPendingOffer?: string | null;
        /**
         * Output only. The offer duration of the new offer in ISO 8601 duration format. Field is empty if the pending plan change is not moving to an offer since the entitlement is not pending, only the plan change is pending. If the offer was created with a specified end date instead of a duration, this field is empty.
         */
        newPendingOfferDuration?: string | null;
        /**
         * Output only. The identifier of the pending new plan. Required if the product has plans and the entitlement has a pending plan change.
         */
        newPendingPlan?: string | null;
        /**
         * Output only. The name of the offer that was procured. Field is empty if order was not made using an offer. Format: 'projects/{project\}/services/{service\}/privateOffers/{offer-id\}' OR 'projects/{project\}/services/{service\}/standardOffers/{offer-id\}', depending on whether the offer is private or public.
         */
        offer?: string | null;
        /**
         * Output only. The offer duration of the current offer in ISO 8601 duration format. Field is empty if entitlement was not made using an offer. If the offer was created with a specified end date instead of a duration, this field is empty.
         */
        offerDuration?: string | null;
        /**
         * Output only. End time for the Offer association corresponding to this entitlement. The field is only populated if the entitlement is currently associated with an Offer.
         */
        offerEndTime?: string | null;
        /**
         * Output only. The identifier of the plan that was procured. Required if the product has plans.
         */
        plan?: string | null;
        /**
         * Output only. The identifier of the entity that was purchased. This may actually represent a product, quote, or offer. It is highly recommended to use the more explicit fields productExternalName, quoteExternalName, or offer listed below based on your needs.
         */
        product?: string | null;
        /**
         * Output only. The identifier of the product that was procured.
         */
        productExternalName?: string | null;
        /**
         * Output only. The identifier of the service provider that this entitlement was created against. Each service provider is assigned a unique provider value when they onboard with Cloud Commerce platform.
         */
        provider?: string | null;
        /**
         * Output only. The identifier of the quote that was used to procure. Empty if the order is not purchased using a quote.
         */
        quoteExternalName?: string | null;
        /**
         * Output only. The state of the entitlement.
         */
        state?: string | null;
        /**
         * Output only. End time for the subscription corresponding to this entitlement.
         */
        subscriptionEndTime?: string | null;
        /**
         * Output only. The last update timestamp.
         */
        updateTime?: string | null;
        /**
         * Output only. The consumerId to use when reporting usage through the Service Control API. See the consumerId field at [Reporting Metrics](https://cloud.google.com/service-control/reporting-metrics) for more details. This field is present only if the product has usage-based billing configured.
         */
        usageReportingId?: string | null;
    }
    /**
     * Response message for [PartnerProcurementService.ListAccounts[].
     */
    export interface Schema$ListAccountsResponse {
        /**
         * The list of accounts in this response.
         */
        accounts?: Schema$Account[];
        /**
         * The token for fetching the next page.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for PartnerProcurementService.ListEntitlements.
     */
    export interface Schema$ListEntitlementsResponse {
        /**
         * The list of entitlements in this response.
         */
        entitlements?: Schema$Entitlement[];
        /**
         * The token for fetching the next page.
         */
        nextPageToken?: string | null;
    }
    /**
     * Request message for PartnerProcurementService.RejectAccount.
     */
    export interface Schema$RejectAccountRequest {
        /**
         * The name of the approval being rejected. If absent and there is only one approval possible, that approval will be rejected. If absent and there are many approvals possible, the request will fail with a 400 Bad Request. Optional.
         */
        approvalName?: string | null;
        /**
         * Free form text string explaining the rejection reason. Max allowed length: 256 bytes. Longer strings will be truncated.
         */
        reason?: string | null;
    }
    /**
     * Request message for PartnerProcurementService.RejectEntitlementPlanChange.
     */
    export interface Schema$RejectEntitlementPlanChangeRequest {
        /**
         * Name of the pending plan that is being rejected. Required.
         */
        pendingPlanName?: string | null;
        /**
         * Free form text string explaining the rejection reason. Max allowed length: 256 bytes. Longer strings will be truncated.
         */
        reason?: string | null;
    }
    /**
     * Request message for PartnerProcurementService.RejectEntitlement.
     */
    export interface Schema$RejectEntitlementRequest {
        /**
         * Free form text string explaining the rejection reason. Max allowed length: 256 bytes. Longer strings will be truncated.
         */
        reason?: string | null;
    }
    /**
     * Request message for PartnerProcurementService.ResetAccount.
     */
    export interface Schema$ResetAccountRequest {
    }
    /**
     * Request message for ParterProcurementService.SuspendEntitlement. This is not yet supported.
     */
    export interface Schema$SuspendEntitlementRequest {
        /**
         * A free-form reason string, explaining the reason for suspension request.
         */
        reason?: string | null;
    }
    export class Resource$Providers {
        context: APIRequestContext;
        accounts: Resource$Providers$Accounts;
        entitlements: Resource$Providers$Entitlements;
        constructor(context: APIRequestContext);
    }
    export class Resource$Providers$Accounts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Grants an approval on an Account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.accounts.approve({
         *     // The resource name of the account. Required.
         *     name: 'providers/my-provider/accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "properties": {},
         *       //   "reason": "my_reason",
         *       //   "approvalName": "my_approvalName"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        approve(params: Params$Resource$Providers$Accounts$Approve, options: StreamMethodOptions): GaxiosPromise<Readable>;
        approve(params?: Params$Resource$Providers$Accounts$Approve, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        approve(params: Params$Resource$Providers$Accounts$Approve, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        approve(params: Params$Resource$Providers$Accounts$Approve, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        approve(params: Params$Resource$Providers$Accounts$Approve, callback: BodyResponseCallback<Schema$Empty>): void;
        approve(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets a requested Account resource.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.accounts.get({
         *     // The name of the account to retrieve.
         *     name: 'providers/my-provider/accounts/my-account',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "state": "my_state",
         *   //   "inputProperties": {},
         *   //   "createTime": "my_createTime",
         *   //   "provider": "my_provider",
         *   //   "updateTime": "my_updateTime",
         *   //   "name": "my_name",
         *   //   "approvals": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Providers$Accounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Providers$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        get(params: Params$Resource$Providers$Accounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Providers$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Providers$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Lists Accounts that the provider has access to.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.accounts.list({
         *     // The maximum number of entries that are requested The default page size is 25 and the maximum page size is 200.
         *     pageSize: 'placeholder-value',
         *     // The token for fetching the next page.
         *     pageToken: 'placeholder-value',
         *     // The parent resource name.
         *     parent: 'providers/my-provider',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accounts": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Providers$Accounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Providers$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$ListAccountsResponse>;
        list(params: Params$Resource$Providers$Accounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Providers$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountsResponse>, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(params: Params$Resource$Providers$Accounts$List, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        /**
         * Rejects an approval on an Account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.accounts.reject({
         *     // The resource name of the account. Required.
         *     name: 'providers/my-provider/accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "reason": "my_reason",
         *       //   "approvalName": "my_approvalName"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reject(params: Params$Resource$Providers$Accounts$Reject, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reject(params?: Params$Resource$Providers$Accounts$Reject, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        reject(params: Params$Resource$Providers$Accounts$Reject, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reject(params: Params$Resource$Providers$Accounts$Reject, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        reject(params: Params$Resource$Providers$Accounts$Reject, callback: BodyResponseCallback<Schema$Empty>): void;
        reject(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Resets an Account and cancel all associated Entitlements. Partner can only reset accounts they own rather than customer accounts.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.accounts.reset({
         *     // The resource name of the account. Required.
         *     name: 'providers/my-provider/accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {}
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reset(params: Params$Resource$Providers$Accounts$Reset, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reset(params?: Params$Resource$Providers$Accounts$Reset, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        reset(params: Params$Resource$Providers$Accounts$Reset, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reset(params: Params$Resource$Providers$Accounts$Reset, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        reset(params: Params$Resource$Providers$Accounts$Reset, callback: BodyResponseCallback<Schema$Empty>): void;
        reset(callback: BodyResponseCallback<Schema$Empty>): void;
    }
    export interface Params$Resource$Providers$Accounts$Approve extends StandardParameters {
        /**
         * The resource name of the account. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApproveAccountRequest;
    }
    export interface Params$Resource$Providers$Accounts$Get extends StandardParameters {
        /**
         * The name of the account to retrieve.
         */
        name?: string;
    }
    export interface Params$Resource$Providers$Accounts$List extends StandardParameters {
        /**
         * The maximum number of entries that are requested The default page size is 25 and the maximum page size is 200.
         */
        pageSize?: number;
        /**
         * The token for fetching the next page.
         */
        pageToken?: string;
        /**
         * The parent resource name.
         */
        parent?: string;
    }
    export interface Params$Resource$Providers$Accounts$Reject extends StandardParameters {
        /**
         * The resource name of the account. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RejectAccountRequest;
    }
    export interface Params$Resource$Providers$Accounts$Reset extends StandardParameters {
        /**
         * The resource name of the account. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ResetAccountRequest;
    }
    export class Resource$Providers$Entitlements {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.entitlements.approve({
         *     // The resource name of the entitlement. Required.
         *     name: 'providers/my-provider/entitlements/my-entitlement',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "entitlementMigrated": "my_entitlementMigrated",
         *       //   "properties": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        approve(params: Params$Resource$Providers$Entitlements$Approve, options: StreamMethodOptions): GaxiosPromise<Readable>;
        approve(params?: Params$Resource$Providers$Entitlements$Approve, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        approve(params: Params$Resource$Providers$Entitlements$Approve, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        approve(params: Params$Resource$Providers$Entitlements$Approve, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        approve(params: Params$Resource$Providers$Entitlements$Approve, callback: BodyResponseCallback<Schema$Empty>): void;
        approve(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await cloudcommerceprocurement.providers.entitlements.approvePlanChange({
         *       // The resource name of the entitlement. Required.
         *       name: 'providers/my-provider/entitlements/my-entitlement',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "pendingPlanName": "my_pendingPlanName"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        approvePlanChange(params: Params$Resource$Providers$Entitlements$Approveplanchange, options: StreamMethodOptions): GaxiosPromise<Readable>;
        approvePlanChange(params?: Params$Resource$Providers$Entitlements$Approveplanchange, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        approvePlanChange(params: Params$Resource$Providers$Entitlements$Approveplanchange, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        approvePlanChange(params: Params$Resource$Providers$Entitlements$Approveplanchange, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        approvePlanChange(params: Params$Resource$Providers$Entitlements$Approveplanchange, callback: BodyResponseCallback<Schema$Empty>): void;
        approvePlanChange(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets a requested Entitlement resource.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.entitlements.get({
         *     // The name of the entitlement to retrieve.
         *     name: 'providers/my-provider/entitlements/my-entitlement',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "offer": "my_offer",
         *   //   "offerEndTime": "my_offerEndTime",
         *   //   "name": "my_name",
         *   //   "newPendingOfferDuration": "my_newPendingOfferDuration",
         *   //   "provider": "my_provider",
         *   //   "messageToUser": "my_messageToUser",
         *   //   "quoteExternalName": "my_quoteExternalName",
         *   //   "subscriptionEndTime": "my_subscriptionEndTime",
         *   //   "productExternalName": "my_productExternalName",
         *   //   "inputProperties": {},
         *   //   "createTime": "my_createTime",
         *   //   "account": "my_account",
         *   //   "newPendingPlan": "my_newPendingPlan",
         *   //   "plan": "my_plan",
         *   //   "offerDuration": "my_offerDuration",
         *   //   "state": "my_state",
         *   //   "newOfferEndTime": "my_newOfferEndTime",
         *   //   "updateTime": "my_updateTime",
         *   //   "product": "my_product",
         *   //   "usageReportingId": "my_usageReportingId",
         *   //   "consumers": [],
         *   //   "newPendingOffer": "my_newPendingOffer"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Providers$Entitlements$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Providers$Entitlements$Get, options?: MethodOptions): GaxiosPromise<Schema$Entitlement>;
        get(params: Params$Resource$Providers$Entitlements$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Providers$Entitlements$Get, options: MethodOptions | BodyResponseCallback<Schema$Entitlement>, callback: BodyResponseCallback<Schema$Entitlement>): void;
        get(params: Params$Resource$Providers$Entitlements$Get, callback: BodyResponseCallback<Schema$Entitlement>): void;
        get(callback: BodyResponseCallback<Schema$Entitlement>): void;
        /**
         * Lists Entitlements for which the provider has read access.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.entitlements.list({
         *     // The filter that can be used to limit the list request. The filter is a query string that can match a selected set of attributes with string values. For example `account=E-1234-5678-ABCD-EFGH`, `state=pending_cancellation`, and `plan!=foo-plan`. Supported query attributes are * `account` * `customer_billing_account` with value in the format of: `billingAccounts/{id\}` * `product_external_name` * `quote_external_name` * `offer` * `new_pending_offer` * `plan` * `newPendingPlan` or `new_pending_plan` * `state` * `consumers.project` Note that the consumers match works on repeated structures, so equality (`consumers.project=projects/123456789`) is not supported. Set membership can be expressed with the `:` operator. For example, `consumers.project:projects/123456789` finds entitlements with at least one consumer with project field equal to `projects/123456789`. Also note that the state name match is case-insensitive and query can omit the prefix "ENTITLEMENT_". For example, `state=active` is equivalent to `state=ENTITLEMENT_ACTIVE`. If the query contains some special characters other than letters, underscore, or digits, the phrase must be quoted with double quotes. For example, `product="providerId:productId"`, where the product name needs to be quoted because it contains special character colon. Queries can be combined with `AND`, `OR`, and `NOT` to form more complex queries. They can also be grouped to force a desired evaluation order. For example, `state=active AND (account=E-1234 OR account=5678) AND NOT (product=foo-product)`. Connective `AND` can be omitted between two predicates. For example `account=E-1234 state=active` is equivalent to `account=E-1234 AND state=active`.
         *     filter: 'placeholder-value',
         *     // The maximum number of entries that are requested. The default page size is 200.
         *     pageSize: 'placeholder-value',
         *     // The token for fetching the next page.
         *     pageToken: 'placeholder-value',
         *     // The parent resource name.
         *     parent: 'providers/my-provider',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "entitlements": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Providers$Entitlements$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Providers$Entitlements$List, options?: MethodOptions): GaxiosPromise<Schema$ListEntitlementsResponse>;
        list(params: Params$Resource$Providers$Entitlements$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Providers$Entitlements$List, options: MethodOptions | BodyResponseCallback<Schema$ListEntitlementsResponse>, callback: BodyResponseCallback<Schema$ListEntitlementsResponse>): void;
        list(params: Params$Resource$Providers$Entitlements$List, callback: BodyResponseCallback<Schema$ListEntitlementsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEntitlementsResponse>): void;
        /**
         * Updates an existing Entitlement.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.entitlements.patch({
         *     // The name of the entitlement to update.
         *     name: 'providers/my-provider/entitlements/my-entitlement',
         *     // The update mask that applies to the resource. See the [FieldMask definition] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for more details.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "offer": "my_offer",
         *       //   "offerEndTime": "my_offerEndTime",
         *       //   "name": "my_name",
         *       //   "newPendingOfferDuration": "my_newPendingOfferDuration",
         *       //   "provider": "my_provider",
         *       //   "messageToUser": "my_messageToUser",
         *       //   "quoteExternalName": "my_quoteExternalName",
         *       //   "subscriptionEndTime": "my_subscriptionEndTime",
         *       //   "productExternalName": "my_productExternalName",
         *       //   "inputProperties": {},
         *       //   "createTime": "my_createTime",
         *       //   "account": "my_account",
         *       //   "newPendingPlan": "my_newPendingPlan",
         *       //   "plan": "my_plan",
         *       //   "offerDuration": "my_offerDuration",
         *       //   "state": "my_state",
         *       //   "newOfferEndTime": "my_newOfferEndTime",
         *       //   "updateTime": "my_updateTime",
         *       //   "product": "my_product",
         *       //   "usageReportingId": "my_usageReportingId",
         *       //   "consumers": [],
         *       //   "newPendingOffer": "my_newPendingOffer"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "offer": "my_offer",
         *   //   "offerEndTime": "my_offerEndTime",
         *   //   "name": "my_name",
         *   //   "newPendingOfferDuration": "my_newPendingOfferDuration",
         *   //   "provider": "my_provider",
         *   //   "messageToUser": "my_messageToUser",
         *   //   "quoteExternalName": "my_quoteExternalName",
         *   //   "subscriptionEndTime": "my_subscriptionEndTime",
         *   //   "productExternalName": "my_productExternalName",
         *   //   "inputProperties": {},
         *   //   "createTime": "my_createTime",
         *   //   "account": "my_account",
         *   //   "newPendingPlan": "my_newPendingPlan",
         *   //   "plan": "my_plan",
         *   //   "offerDuration": "my_offerDuration",
         *   //   "state": "my_state",
         *   //   "newOfferEndTime": "my_newOfferEndTime",
         *   //   "updateTime": "my_updateTime",
         *   //   "product": "my_product",
         *   //   "usageReportingId": "my_usageReportingId",
         *   //   "consumers": [],
         *   //   "newPendingOffer": "my_newPendingOffer"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Providers$Entitlements$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Providers$Entitlements$Patch, options?: MethodOptions): GaxiosPromise<Schema$Entitlement>;
        patch(params: Params$Resource$Providers$Entitlements$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Providers$Entitlements$Patch, options: MethodOptions | BodyResponseCallback<Schema$Entitlement>, callback: BodyResponseCallback<Schema$Entitlement>): void;
        patch(params: Params$Resource$Providers$Entitlements$Patch, callback: BodyResponseCallback<Schema$Entitlement>): void;
        patch(callback: BodyResponseCallback<Schema$Entitlement>): void;
        /**
         * Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.entitlements.reject({
         *     // The resource name of the entitlement. Required.
         *     name: 'providers/my-provider/entitlements/my-entitlement',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "reason": "my_reason"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reject(params: Params$Resource$Providers$Entitlements$Reject, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reject(params?: Params$Resource$Providers$Entitlements$Reject, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        reject(params: Params$Resource$Providers$Entitlements$Reject, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reject(params: Params$Resource$Providers$Entitlements$Reject, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        reject(params: Params$Resource$Providers$Entitlements$Reject, callback: BodyResponseCallback<Schema$Empty>): void;
        reject(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await cloudcommerceprocurement.providers.entitlements.rejectPlanChange({
         *       // The resource name of the entitlement. Required.
         *       name: 'providers/my-provider/entitlements/my-entitlement',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "pendingPlanName": "my_pendingPlanName",
         *         //   "reason": "my_reason"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        rejectPlanChange(params: Params$Resource$Providers$Entitlements$Rejectplanchange, options: StreamMethodOptions): GaxiosPromise<Readable>;
        rejectPlanChange(params?: Params$Resource$Providers$Entitlements$Rejectplanchange, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        rejectPlanChange(params: Params$Resource$Providers$Entitlements$Rejectplanchange, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        rejectPlanChange(params: Params$Resource$Providers$Entitlements$Rejectplanchange, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        rejectPlanChange(params: Params$Resource$Providers$Entitlements$Rejectplanchange, callback: BodyResponseCallback<Schema$Empty>): void;
        rejectPlanChange(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Requests suspension of an active Entitlement. This is not yet supported.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/cloudcommerceprocurement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const cloudcommerceprocurement = google.cloudcommerceprocurement('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await cloudcommerceprocurement.providers.entitlements.suspend({
         *     // The name of the entitlement to suspend.
         *     name: 'providers/my-provider/entitlements/my-entitlement',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "reason": "my_reason"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        suspend(params: Params$Resource$Providers$Entitlements$Suspend, options: StreamMethodOptions): GaxiosPromise<Readable>;
        suspend(params?: Params$Resource$Providers$Entitlements$Suspend, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        suspend(params: Params$Resource$Providers$Entitlements$Suspend, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        suspend(params: Params$Resource$Providers$Entitlements$Suspend, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        suspend(params: Params$Resource$Providers$Entitlements$Suspend, callback: BodyResponseCallback<Schema$Empty>): void;
        suspend(callback: BodyResponseCallback<Schema$Empty>): void;
    }
    export interface Params$Resource$Providers$Entitlements$Approve extends StandardParameters {
        /**
         * The resource name of the entitlement. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApproveEntitlementRequest;
    }
    export interface Params$Resource$Providers$Entitlements$Approveplanchange extends StandardParameters {
        /**
         * The resource name of the entitlement. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApproveEntitlementPlanChangeRequest;
    }
    export interface Params$Resource$Providers$Entitlements$Get extends StandardParameters {
        /**
         * The name of the entitlement to retrieve.
         */
        name?: string;
    }
    export interface Params$Resource$Providers$Entitlements$List extends StandardParameters {
        /**
         * The filter that can be used to limit the list request. The filter is a query string that can match a selected set of attributes with string values. For example `account=E-1234-5678-ABCD-EFGH`, `state=pending_cancellation`, and `plan!=foo-plan`. Supported query attributes are * `account` * `customer_billing_account` with value in the format of: `billingAccounts/{id\}` * `product_external_name` * `quote_external_name` * `offer` * `new_pending_offer` * `plan` * `newPendingPlan` or `new_pending_plan` * `state` * `consumers.project` Note that the consumers match works on repeated structures, so equality (`consumers.project=projects/123456789`) is not supported. Set membership can be expressed with the `:` operator. For example, `consumers.project:projects/123456789` finds entitlements with at least one consumer with project field equal to `projects/123456789`. Also note that the state name match is case-insensitive and query can omit the prefix "ENTITLEMENT_". For example, `state=active` is equivalent to `state=ENTITLEMENT_ACTIVE`. If the query contains some special characters other than letters, underscore, or digits, the phrase must be quoted with double quotes. For example, `product="providerId:productId"`, where the product name needs to be quoted because it contains special character colon. Queries can be combined with `AND`, `OR`, and `NOT` to form more complex queries. They can also be grouped to force a desired evaluation order. For example, `state=active AND (account=E-1234 OR account=5678) AND NOT (product=foo-product)`. Connective `AND` can be omitted between two predicates. For example `account=E-1234 state=active` is equivalent to `account=E-1234 AND state=active`.
         */
        filter?: string;
        /**
         * The maximum number of entries that are requested. The default page size is 200.
         */
        pageSize?: number;
        /**
         * The token for fetching the next page.
         */
        pageToken?: string;
        /**
         * The parent resource name.
         */
        parent?: string;
    }
    export interface Params$Resource$Providers$Entitlements$Patch extends StandardParameters {
        /**
         * The name of the entitlement to update.
         */
        name?: string;
        /**
         * The update mask that applies to the resource. See the [FieldMask definition] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for more details.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Entitlement;
    }
    export interface Params$Resource$Providers$Entitlements$Reject extends StandardParameters {
        /**
         * The resource name of the entitlement. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RejectEntitlementRequest;
    }
    export interface Params$Resource$Providers$Entitlements$Rejectplanchange extends StandardParameters {
        /**
         * The resource name of the entitlement. Required.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RejectEntitlementPlanChangeRequest;
    }
    export interface Params$Resource$Providers$Entitlements$Suspend extends StandardParameters {
        /**
         * The name of the entitlement to suspend.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SuspendEntitlementRequest;
    }
    export {};
}
