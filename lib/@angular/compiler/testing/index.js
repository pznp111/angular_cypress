/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/testing", ["require", "exports", "tslib", "@angular/compiler/testing/public_api"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    // This file is not used to build this module. It is only used during editing
    // by the TypeScript language service and during build for verification. `ngc`
    // replaces this file with production index.ts when it rewrites private symbol
    // names.
    tslib_1.__exportStar(require("@angular/compiler/testing/public_api"), exports);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci90ZXN0aW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDZFQUE2RTtJQUM3RSw4RUFBOEU7SUFDOUUsOEVBQThFO0lBQzlFLFNBQVM7SUFFVCwrRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVGhpcyBmaWxlIGlzIG5vdCB1c2VkIHRvIGJ1aWxkIHRoaXMgbW9kdWxlLiBJdCBpcyBvbmx5IHVzZWQgZHVyaW5nIGVkaXRpbmdcbi8vIGJ5IHRoZSBUeXBlU2NyaXB0IGxhbmd1YWdlIHNlcnZpY2UgYW5kIGR1cmluZyBidWlsZCBmb3IgdmVyaWZpY2F0aW9uLiBgbmdjYFxuLy8gcmVwbGFjZXMgdGhpcyBmaWxlIHdpdGggcHJvZHVjdGlvbiBpbmRleC50cyB3aGVuIGl0IHJld3JpdGVzIHByaXZhdGUgc3ltYm9sXG4vLyBuYW1lcy5cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcbiJdfQ==