/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, InjectionToken } from '@angular/core';
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
export class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
export const HTTP_INTERCEPTORS = new InjectionToken('HTTP_INTERCEPTORS');
export class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vaHR0cC9zcmMvaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUErQ3pEOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW9CLElBQWlCLEVBQVUsV0FBNEI7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLEdBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO0FBRzVGLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFKRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtIdHRwSGFuZGxlcn0gZnJvbSAnLi9iYWNrZW5kJztcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQge0h0dHBFdmVudH0gZnJvbSAnLi9yZXNwb25zZSc7XG5cbi8qKlxuICogSW50ZXJjZXB0cyBhbmQgaGFuZGxlcyBhbiBgSHR0cFJlcXVlc3RgIG9yIGBIdHRwUmVzcG9uc2VgLlxuICpcbiAqIE1vc3QgaW50ZXJjZXB0b3JzIHRyYW5zZm9ybSB0aGUgb3V0Z29pbmcgcmVxdWVzdCBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAqIG5leHQgaW50ZXJjZXB0b3IgaW4gdGhlIGNoYWluLCBieSBjYWxsaW5nIGBuZXh0LmhhbmRsZSh0cmFuc2Zvcm1lZFJlcSlgLlxuICogQW4gaW50ZXJjZXB0b3IgbWF5IHRyYW5zZm9ybSB0aGVcbiAqIHJlc3BvbnNlIGV2ZW50IHN0cmVhbSBhcyB3ZWxsLCBieSBhcHBseWluZyBhZGRpdGlvbmFsIFJ4SlMgb3BlcmF0b3JzIG9uIHRoZSBzdHJlYW1cbiAqIHJldHVybmVkIGJ5IGBuZXh0LmhhbmRsZSgpYC5cbiAqXG4gKiBNb3JlIHJhcmVseSwgYW4gaW50ZXJjZXB0b3IgbWF5IGhhbmRsZSB0aGUgcmVxdWVzdCBlbnRpcmVseSxcbiAqIGFuZCBjb21wb3NlIGEgbmV3IGV2ZW50IHN0cmVhbSBpbnN0ZWFkIG9mIGludm9raW5nIGBuZXh0LmhhbmRsZSgpYC4gVGhpcyBpcyBhblxuICogYWNjZXB0YWJsZSBiZWhhdmlvciwgYnV0IGtlZXAgaW4gbWluZCB0aGF0IGZ1cnRoZXIgaW50ZXJjZXB0b3JzIHdpbGwgYmUgc2tpcHBlZCBlbnRpcmVseS5cbiAqXG4gKiBJdCBpcyBhbHNvIHJhcmUgYnV0IHZhbGlkIGZvciBhbiBpbnRlcmNlcHRvciB0byByZXR1cm4gbXVsdGlwbGUgcmVzcG9uc2VzIG9uIHRoZVxuICogZXZlbnQgc3RyZWFtIGZvciBhIHNpbmdsZSByZXF1ZXN0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqXG4gKiBAc2VlIFtIVFRQIEd1aWRlXShndWlkZS9odHRwI2ludGVyY2VwdGluZy1yZXF1ZXN0cy1hbmQtcmVzcG9uc2VzKVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVG8gdXNlIHRoZSBzYW1lIGluc3RhbmNlIG9mIGBIdHRwSW50ZXJjZXB0b3JzYCBmb3IgdGhlIGVudGlyZSBhcHAsIGltcG9ydCB0aGUgYEh0dHBDbGllbnRNb2R1bGVgXG4gKiBvbmx5IGluIHlvdXIgYEFwcE1vZHVsZWAsIGFuZCBhZGQgdGhlIGludGVyY2VwdG9ycyB0byB0aGUgcm9vdCBhcHBsaWNhdGlvbiBpbmplY3RvciAuXG4gKiBJZiB5b3UgaW1wb3J0IGBIdHRwQ2xpZW50TW9kdWxlYCBtdWx0aXBsZSB0aW1lcyBhY3Jvc3MgZGlmZmVyZW50IG1vZHVsZXMgKGZvciBleGFtcGxlLCBpbiBsYXp5XG4gKiBsb2FkaW5nIG1vZHVsZXMpLCBlYWNoIGltcG9ydCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgdGhlIGBIdHRwQ2xpZW50TW9kdWxlYCwgd2hpY2ggb3ZlcndyaXRlcyB0aGVcbiAqIGludGVyY2VwdG9ycyBwcm92aWRlZCBpbiB0aGUgcm9vdCBtb2R1bGUuXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBJbnRlcmNlcHRvciB7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIGFuZCBoYW5kbGVzIGEgZ2l2ZW4gSFRUUCByZXF1ZXN0LlxuICAgKiBAcGFyYW0gcmVxIFRoZSBvdXRnb2luZyByZXF1ZXN0IG9iamVjdCB0byBoYW5kbGUuXG4gICAqIEBwYXJhbSBuZXh0IFRoZSBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbiwgb3IgdGhlIGJhY2tlbmRcbiAgICogaWYgbm8gaW50ZXJjZXB0b3JzIHJlbWFpbiBpbiB0aGUgY2hhaW4uXG4gICAqIEByZXR1cm5zIEFuIG9ic2VydmFibGUgb2YgdGhlIGV2ZW50IHN0cmVhbS5cbiAgICovXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XG59XG5cbi8qKlxuICogYEh0dHBIYW5kbGVyYCB3aGljaCBhcHBsaWVzIGFuIGBIdHRwSW50ZXJjZXB0b3JgIHRvIGFuIGBIdHRwUmVxdWVzdGAuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEh0dHBJbnRlcmNlcHRvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV4dDogSHR0cEhhbmRsZXIsIHByaXZhdGUgaW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvcikge31cblxuICBoYW5kbGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmludGVyY2VwdG9yLmludGVyY2VwdChyZXEsIHRoaXMubmV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIG11bHRpLXByb3ZpZGVyIHRva2VuIHRoYXQgcmVwcmVzZW50cyB0aGUgYXJyYXkgb2YgcmVnaXN0ZXJlZFxuICogYEh0dHBJbnRlcmNlcHRvcmAgb2JqZWN0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBIVFRQX0lOVEVSQ0VQVE9SUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIdHRwSW50ZXJjZXB0b3JbXT4oJ0hUVFBfSU5URVJDRVBUT1JTJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb29wSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19