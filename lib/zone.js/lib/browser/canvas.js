"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('canvas', function (global, Zone, api) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        api.patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvem9uZS5qcy9saWIvYnJvd3Nlci9jYW52YXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBVyxFQUFFLElBQWMsRUFBRSxHQUFpQjtJQUN6RSxJQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELElBQUksT0FBTyxpQkFBaUIsS0FBSyxXQUFXLElBQUksaUJBQWlCLENBQUMsU0FBUztRQUN2RSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ3RDLEdBQUcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFDLElBQVMsRUFBRSxJQUFXO1lBQy9FLE9BQU8sRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgnY2FudmFzJywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgY29uc3QgSFRNTENhbnZhc0VsZW1lbnQgPSBnbG9iYWxbJ0hUTUxDYW52YXNFbGVtZW50J107XG4gIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIEhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZSAmJlxuICAgICAgSFRNTENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYikge1xuICAgIGFwaS5wYXRjaE1hY3JvVGFzayhIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUsICd0b0Jsb2InLCAoc2VsZjogYW55LCBhcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIHtuYW1lOiAnSFRNTENhbnZhc0VsZW1lbnQudG9CbG9iJywgdGFyZ2V0OiBzZWxmLCBjYklkeDogMCwgYXJnczogYXJnc307XG4gICAgfSk7XG4gIH1cbn0pO1xuIl19