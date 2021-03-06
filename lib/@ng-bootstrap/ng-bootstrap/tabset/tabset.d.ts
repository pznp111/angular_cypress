import { AfterContentChecked, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { NgbTabsetConfig } from './tabset-config';
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTabTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * A directive to wrap content to be displayed in a tab.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * A directive representing an individual tab.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTab implements AfterContentChecked {
    /**
     * The tab identifier.
     *
     * Must be unique for the entire document for proper accessibility support.
     */
    id: string;
    /**
     * The tab title.
     *
     * Use the [`NgbTabTitle`](#/components/tabset/api#NgbTabTitle) directive for non-string titles.
     */
    title: string;
    /**
     * If `true`, the current tab is disabled and can't be toggled.
     */
    disabled: boolean;
    titleTpl: NgbTabTitle | null;
    contentTpl: NgbTabContent | null;
    titleTpls: QueryList<NgbTabTitle>;
    contentTpls: QueryList<NgbTabContent>;
    ngAfterContentChecked(): void;
}
/**
 * The payload of the change event fired right before the tab change.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export interface NgbTabChangeEvent {
    /**
     * The id of the currently active tab.
     */
    activeId: string;
    /**
     * The id of the newly selected tab.
     */
    nextId: string;
    /**
     * Calling this function will prevent tab switching.
     */
    preventDefault: () => void;
}
/**
 * A component that makes it easy to create tabbed interface.
 *
 * @deprecated 6.0.0 Please use NgbNav instead
 */
export declare class NgbTabset implements AfterContentChecked {
    static ngAcceptInputType_justify: string;
    static ngAcceptInputType_orientation: string;
    justifyClass: string;
    tabs: QueryList<NgbTab>;
    /**
     * The identifier of the tab that should be opened **initially**.
     *
     * For subsequent tab switches use the `.select()` method and the `(tabChange)` event.
     */
    activeId: string;
    /**
     * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
     */
    destroyOnHide: boolean;
    /**
     * The horizontal alignment of the tabs with flexbox utilities.
     */
    set justify(className: 'start' | 'center' | 'end' | 'fill' | 'justified');
    /**
     * The orientation of the tabset.
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Type of navigation to be used for tabs.
     *
     * Currently Bootstrap supports only `"tabs"` and `"pills"`.
     *
     * Since `3.0.0` can also be an arbitrary string (ex. for custom themes).
     */
    type: 'tabs' | 'pills' | string;
    /**
     * A tab change event emitted right before the tab change happens.
     *
     * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
     */
    tabChange: EventEmitter<NgbTabChangeEvent>;
    constructor(config: NgbTabsetConfig);
    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     */
    select(tabId: string): void;
    ngAfterContentChecked(): void;
    private _getTabById;
}
