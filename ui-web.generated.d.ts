declare module "@yuants/ui-web" {
/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ComponentType } from 'react';
import * as rxjs from 'rxjs';
import { BehaviorSubject, ReplaySubject, Observable, Subject } from 'rxjs';
import * as _yuants_data_account from '@yuants/data-account';
import { ColumnDef, Table, SortingState, OnChangeFn, GroupingState, VisibilityState, ColumnFiltersState, ExpandedState } from '@tanstack/react-table';
import { JSONSchema7 } from 'json-schema';
import { ThemeProps, FormProps } from '@rjsf/core';
import { StrictRJSFSchema, RJSFSchema, FormContextType, TemplatesType, RegistryWidgetsType, UiSchema } from '@rjsf/utils';
import { ButtonProps } from '@douyinfe/semi-ui/lib/es/button';
import { UniqueIdentifier } from '@dnd-kit/core';
import { SwitchProps } from '@douyinfe/semi-ui/lib/es/switch';
import { ToastReactProps } from '@douyinfe/semi-ui/lib/es/toast';
import * as _yuants_protocol from '@yuants/protocol';
import { Terminal } from '@yuants/protocol';
import { IQuote } from '@yuants/data-quote';

 namespace index_d$v {
  export {  };
}

 const AccountSelector: (props: {
    value: string;
    onChange: (v: string) => void;
    candidates: string[];
}) => react_jsx_runtime.JSX.Element;

 const InlineAccountId: React__default.MemoExoticComponent<(props: {
    account_id: string;
}) => react_jsx_runtime.JSX.Element>;

 const useAccountInfo: (account_id: string) => rxjs.Observable<_yuants_data_account.IAccountInfo>;

 const index_d$u_AccountSelector: typeof AccountSelector;
 const index_d$u_InlineAccountId: typeof InlineAccountId;
 const index_d$u_useAccountInfo: typeof useAccountInfo;
 namespace index_d$u {
  export { index_d$u_AccountSelector as AccountSelector, index_d$u_InlineAccountId as InlineAccountId, index_d$u_useAccountInfo as useAccountInfo };
}

 namespace index_d$t {
  export {  };
}

 namespace index_d$s {
  export {  };
}

 const createPersistBehaviorSubject: <T>(key: string, initialValue: T) => BehaviorSubject<T | undefined>;

/**
 * @public
 */
 const Launch: React__default.MemoExoticComponent<(props: {
    children: React__default.ReactNode;
}) => react_jsx_runtime.JSX.Element>;

/**
 * A subject that emits a single value when the workspace is ready.
 * @public
 */
 const ready$: ReplaySubject<unknown>;
 const error$: ReplaySubject<unknown>;

 const index_d$r_Launch: typeof Launch;
 const index_d$r_createPersistBehaviorSubject: typeof createPersistBehaviorSubject;
 const index_d$r_error$: typeof error$;
 const index_d$r_ready$: typeof ready$;
 namespace index_d$r {
  export { index_d$r_Launch as Launch, index_d$r_createPersistBehaviorSubject as createPersistBehaviorSubject, index_d$r_error$ as error$, index_d$r_ready$ as ready$ };
}

 namespace index_d$q {
  export {  };
}

 const registerCommand: (id: string, handler: (params: any) => void) => void;
 const executeCommand: (id: string, params?: {}) => Promise<void>;
 const CommandCenter: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;

 const index_d$p_CommandCenter: typeof CommandCenter;
 const index_d$p_executeCommand: typeof executeCommand;
 const index_d$p_registerCommand: typeof registerCommand;
 namespace index_d$p {
  export { index_d$p_CommandCenter as CommandCenter, index_d$p_executeCommand as executeCommand, index_d$p_registerCommand as registerCommand };
}

 namespace index_d$o {
  export {  };
}

 const useValue: <T>(id: string, initialValue: T) => [T, (v: T) => void];

 const index_d$n_useValue: typeof useValue;
 namespace index_d$n {
  export { index_d$n_useValue as useValue };
}

interface IDataRecordViewDef<T extends {}> {
    conflictKeys?: (keyof T)[];
    TYPE: string;
    columns: (ctx: {
        reloadData: () => Promise<void>;
    }) => ColumnDef<T, any>[];
    extraRecordActions?: React__default.ComponentType<{
        reloadData: () => Promise<void>;
        record: T;
    }>;
    extraHeaderActions?: React__default.ComponentType<{}>;
    newRecord?: () => Partial<T>;
    beforeUpdateTrigger?: (x: T) => void | Promise<void>;
    schema?: JSONSchema7;
}
/**
 * General Data Record View
 */
 function DataRecordView<T extends {}>(props: IDataRecordViewDef<T>): react_jsx_runtime.JSX.Element;

 const index_d$m_DataRecordView: typeof DataRecordView;
 namespace index_d$m {
  export { index_d$m_DataRecordView as DataRecordView };
}

 namespace index_d$l {
  export {  };
}

 namespace index_d$k {
  export {  };
}

 const DesktopLayout: () => react_jsx_runtime.JSX.Element | null;

 const activePage$: rxjs.Observable<{
    page: string;
    pageParams: any;
} | undefined>;

 const index_d$j_DesktopLayout: typeof DesktopLayout;
 const index_d$j_activePage$: typeof activePage$;
 namespace index_d$j {
  export { index_d$j_DesktopLayout as DesktopLayout, index_d$j_activePage$ as activePage$ };
}

 namespace index_d$i {
  export {  };
}

interface INpmPackagePullParams {
    name: string;
    registry?: string;
    version?: string;
    npm_token?: string;
}
 const loadTgzBlob: (tgzBlob: Blob) => Promise<{
    filename: string;
    blob: Blob;
    isDirectory: boolean;
    isFile: boolean;
}[]>;
 function resolveVersion(context: INpmPackagePullParams): Promise<{
    meta: any;
    version: string;
}>;

 const index_d$h_loadTgzBlob: typeof loadTgzBlob;
 const index_d$h_resolveVersion: typeof resolveVersion;
 namespace index_d$h {
  export { index_d$h_loadTgzBlob as loadTgzBlob, index_d$h_resolveVersion as resolveVersion };
}

interface IFileSystemStatResult {
    isFile: () => boolean;
    isDirectory: () => boolean;
}
interface IFileSystemBackend {
    name: string;
    readdir(path: string): Promise<string[]>;
    stat(path: string): Promise<IFileSystemStatResult>;
    readFile(path: string): Promise<string>;
    readFileAsBase64(path: string): Promise<string>;
    readFileAsBlob(path: string): Promise<Blob>;
    writeFile(path: string, content: FileSystemWriteChunkType): Promise<void>;
    createReadableStream(path: string): Promise<ReadableStream>;
    createWritableStream(path: string): Promise<WritableStream>;
    mkdir(path: string): Promise<void>;
    rm(path: string): Promise<void>;
    exists(path: string): Promise<boolean>;
    ensureDir(path: string): Promise<void>;
}

 const FsBackend$: BehaviorSubject<IFileSystemBackend>;
 const fs: IFileSystemBackend;

/**
 * Bundle code from entry
 * @param entry entry filename
 * @returns IIFE-formatted code
 * @public
 */
 const bundleCode: (entry: string, externals: string[]) => Promise<string>;

 const createFileSystemBehaviorSubject: <T>(key: string, initialValue: T) => BehaviorSubject<T | undefined>;

interface PackageJson {
    name?: string;
    main?: string;
    module?: string;
    dir?: string;
    pkg?: PackageJson;
}
interface IOptions {
    isFile?: (file: string) => Promise<boolean>;
    isDirectory?: (dir: string) => Promise<boolean>;
    realpathSync?: (x: string) => Promise<string>;
    readFileSync?: (file: string) => Promise<string>;
    readPackageSync?: (file: string) => Promise<PackageJson>;
    preserveSymlinks?: boolean;
    extensions?: string[];
    includeCoreModules?: boolean;
    basedir?: string;
    filename?: string;
    paths?: string[] | ((request: string, start: string, getPaths: () => string[], opts: IOptions) => string[]);
    packageFilter?: (pkg: PackageJson, pkgfile: string, dir: string) => PackageJson;
    /**
     * transform a path within a package
     *
     * @param pkg - package data
     * @param path - the path being resolved
     * @param relativePath - the path relative from the package.json location
     * @returns - a relative path that will be joined from the package.json location
     */
    pathFilter?: (pkg: PackageJson, path: string, relativePath: string) => string;
    moduleDirectory?: string[];
    packageIterator?: (request: string, start: string, thunk: () => string[], opts: IOptions) => string[];
}
 function resolve(x: string, options: IOptions): Promise<string>;

 const index_d$g_FsBackend$: typeof FsBackend$;
 const index_d$g_bundleCode: typeof bundleCode;
 const index_d$g_createFileSystemBehaviorSubject: typeof createFileSystemBehaviorSubject;
 const index_d$g_fs: typeof fs;
 const index_d$g_resolve: typeof resolve;
 namespace index_d$g {
  export { index_d$g_FsBackend$ as FsBackend$, index_d$g_bundleCode as bundleCode, index_d$g_createFileSystemBehaviorSubject as createFileSystemBehaviorSubject, index_d$g_fs as fs, index_d$g_resolve as resolve };
}

 function generateTemplates<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(): Partial<TemplatesType<T, S, F>>;
 const _default$1: Partial<TemplatesType<any, RJSFSchema, any>>;

 function generateWidgets<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(): RegistryWidgetsType<T, S, F>;
 const _default: RegistryWidgetsType<any, RJSFSchema, any>;

 function generateTheme<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(): ThemeProps<T, S, F>;
 const Theme: ThemeProps<any, RJSFSchema, any>;
 function generateForm<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(): ComponentType<FormProps<T, S, F>>;
 const Form: (props: Omit<FormProps<any, any, any>, 'validator'>) => React__default.ReactElement<FormProps<any, RJSFSchema, any>, string | React__default.JSXElementConstructor<any>>;

/**
 * Request user to input data according to the schema.
 * @param schema - JSON Schema (https://json-schema.org/)
 * @param initialData - Initial data to be filled in the form
 * @returns Promise of user input data
 */
 const showForm: <T>(schema: JSONSchema7, initialData?: any, options?: {
    /**
     * Whether to submit the form immediately if the initial data is valid.
     * if set to true, the form will be submitted immediately without showing the form.
     * if initial data is invalid, the form will be shown as usual.
     */
    immediateSubmit?: boolean | undefined;
    uiSchema?: UiSchema<T, any, any> | undefined;
} | undefined) => Promise<T>;

 const index_d$f_Form: typeof Form;
 const index_d$f_Theme: typeof Theme;
 const index_d$f_generateForm: typeof generateForm;
 const index_d$f_generateTemplates: typeof generateTemplates;
 const index_d$f_generateTheme: typeof generateTheme;
 const index_d$f_generateWidgets: typeof generateWidgets;
 const index_d$f_showForm: typeof showForm;
 namespace index_d$f {
  export { index_d$f_Form as Form, _default$1 as Templates, index_d$f_Theme as Theme, _default as Widgets, Form as default, index_d$f_generateForm as generateForm, index_d$f_generateTemplates as generateTemplates, index_d$f_generateTheme as generateTheme, index_d$f_generateWidgets as generateWidgets, index_d$f_showForm as showForm };
}

 namespace index_d$e {
  export {  };
}

/**
 * Yuan Button Component
 *
 * - Button must display loading status after clicking
 * - Button displays loading if and only if click event processing
 * - We need to know whether the backend click event is processing or not.
 */
 const Button: React__default.MemoExoticComponent<(props: Omit<ButtonProps, 'onClick' | 'loading'> & {
    onClick?: () => any;
    doubleCheck?: {
        title: React__default.ReactNode;
        description?: React__default.ReactNode;
    };
}) => react_jsx_runtime.JSX.Element>;

 function DataView<T, K>(props: {
    data?: T[];
    columns: ColumnDef<T, any>[];
    columnsDependencyList?: any[];
    tableRef?: React.MutableRefObject<Table<T> | undefined>;
    layoutMode?: 'table' | 'list' | 'auto';
    topSlot?: React.ReactNode;
    initialSorting?: SortingState;
    sorting?: SortingState;
    onSortingChange?: OnChangeFn<SortingState>;
    manualSorting?: boolean;
    initialGroupping?: GroupingState;
    initialColumnVisibility?: VisibilityState;
    initialColumnFilterState?: ColumnFiltersState;
    columnFilters?: ColumnFiltersState;
    onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
    initialTopSlotVisible?: boolean;
    topSlotVisible?: boolean;
    isLoading?: boolean;
    initialPageSize?: number;
    CustomView?: React.ComponentType<{
        table: Table<T>;
    }>;
    enableAutoPause?: boolean;
}): react_jsx_runtime.JSX.Element;

 function ListView<T>(props: {
    table: Table<T>;
}): react_jsx_runtime.JSX.Element;

interface IPivotTableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    initialGrouping?: GroupingState;
    initialExpanded?: ExpandedState;
}
 function PivotTable<T>(props: IPivotTableProps<T>): react_jsx_runtime.JSX.Element;

 const SortableList: (props: {
    items: UniqueIdentifier[];
    render: (item: UniqueIdentifier) => React.ReactNode;
    onSort: (items: UniqueIdentifier[]) => void;
}) => react_jsx_runtime.JSX.Element;

/**
 * Yuan Switch Component
 *
 * - Switch must display loading status after clicking
 * - Switch displays loading if and only if click event processing
 * - We need to know whether the backend click event is processing or not.
 */
 const Switch: React__default.MemoExoticComponent<(props: Omit<SwitchProps, "loading" | "onChange"> & {
    onChange?: ((checked: boolean) => any) | undefined;
}) => react_jsx_runtime.JSX.Element>;

 function TableView<T>(props: {
    table: Table<T>;
}): react_jsx_runtime.JSX.Element;

 type ToastProps = string | Omit<ToastReactProps, 'type'>;
/**
 * Yuan Toast Component
 */
 const Toast: {
    info: (props: ToastProps) => string;
    error: (props: ToastProps) => string;
    success: (props: ToastProps) => string;
    warning: (props: ToastProps) => string;
    close: (id: string) => void;
};

 const index_d$d_Button: typeof Button;
 const index_d$d_DataView: typeof DataView;
type index_d$d_IPivotTableProps<T> = IPivotTableProps<T>;
 const index_d$d_ListView: typeof ListView;
 const index_d$d_PivotTable: typeof PivotTable;
 const index_d$d_SortableList: typeof SortableList;
 const index_d$d_Switch: typeof Switch;
 const index_d$d_TableView: typeof TableView;
 const index_d$d_Toast: typeof Toast;
type index_d$d_ToastProps = ToastProps;
 namespace index_d$d {
  export { index_d$d_Button as Button, index_d$d_DataView as DataView, type index_d$d_IPivotTableProps as IPivotTableProps, index_d$d_ListView as ListView, index_d$d_PivotTable as PivotTable, index_d$d_SortableList as SortableList, index_d$d_Switch as Switch, index_d$d_TableView as TableView, index_d$d_Toast as Toast, type index_d$d_ToastProps as ToastProps };
}

 namespace index_d$c {
  export {  };
}

 namespace index_d$b {
  export {  };
}

 const hostUrl$: BehaviorSubject<string | null>;
 const terminal$: Observable<Terminal | null>;

 const index_d$a_hostUrl$: typeof hostUrl$;
 const index_d$a_terminal$: typeof terminal$;
 namespace index_d$a {
  export { index_d$a_hostUrl$ as hostUrl$, index_d$a_terminal$ as terminal$ };
}

interface IInterleavingConfigItem {
    account_id: string;
    datasource_id: string;
    product_id: string;
    order_type: string;
    order_direction: string;
    volume: number;
    disabled?: boolean;
}
interface IInterleavingConfig {
    count: number;
    items: IInterleavingConfigItem[];
}
 const InterleavingTraderConfig$: BehaviorSubject<IInterleavingConfig | undefined>;

type index_d$9_IInterleavingConfig = IInterleavingConfig;
type index_d$9_IInterleavingConfigItem = IInterleavingConfigItem;
 const index_d$9_InterleavingTraderConfig$: typeof InterleavingTraderConfig$;
 namespace index_d$9 {
  export { type index_d$9_IInterleavingConfig as IInterleavingConfig, type index_d$9_IInterleavingConfigItem as IInterleavingConfigItem, index_d$9_InterleavingTraderConfig$ as InterleavingTraderConfig$ };
}

 class ErrorBoundary extends React__default.Component<{
    fallback?: React__default.ComponentType<{
        error: any;
        reset: () => void;
    }>;
    children: React__default.ReactNode;
}> {
    state: {
        hasError: boolean;
        error: null;
    };
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    render(): string | number | boolean | Iterable<React__default.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;
}

 const LocalizePageTitle: React__default.ComponentType<{
    type: string;
    params?: any;
}>;

 const AvailableComponents: Record<string, React__default.ComponentType>;
 const pageRegistered$: Subject<string>;
 const registerPage: (type: string, component: React__default.ComponentType) => void;

interface IPage {
    id: string;
    type: string;
    params: any;
    viewport: {
        w: number;
        h: number;
        x: number;
        y: number;
    };
}
 const Page: React__default.MemoExoticComponent<(props: {
    page: IPage;
}) => react_jsx_runtime.JSX.Element>;
 const usePageParams: <T = any>() => T;
 const usePageTitle: (title: string) => void;
 const usePageType: () => string;
 const usePageViewport: () => {
    w: number;
    h: number;
    x: number;
    y: number;
} | undefined;
 const usePageId: () => string;

 const index_d$8_AvailableComponents: typeof AvailableComponents;
type index_d$8_ErrorBoundary = ErrorBoundary;
 const index_d$8_ErrorBoundary: typeof ErrorBoundary;
 const index_d$8_LocalizePageTitle: typeof LocalizePageTitle;
 const index_d$8_Page: typeof Page;
 const index_d$8_pageRegistered$: typeof pageRegistered$;
 const index_d$8_registerPage: typeof registerPage;
 const index_d$8_usePageId: typeof usePageId;
 const index_d$8_usePageParams: typeof usePageParams;
 const index_d$8_usePageTitle: typeof usePageTitle;
 const index_d$8_usePageType: typeof usePageType;
 const index_d$8_usePageViewport: typeof usePageViewport;
 namespace index_d$8 {
  export { index_d$8_AvailableComponents as AvailableComponents, index_d$8_ErrorBoundary as ErrorBoundary, index_d$8_LocalizePageTitle as LocalizePageTitle, index_d$8_Page as Page, index_d$8_pageRegistered$ as pageRegistered$, index_d$8_registerPage as registerPage, index_d$8_usePageId as usePageId, index_d$8_usePageParams as usePageParams, index_d$8_usePageTitle as usePageTitle, index_d$8_usePageType as usePageType, index_d$8_usePageViewport as usePageViewport };
}

 namespace index_d$7 {
  export {  };
}

 namespace index_d$6 {
  export {  };
}

/**
 * File is associated with Command
 */
interface IAssociationRule {
    /** i18n_key = `association:${id}`  */
    id: string;
    priority?: number;
    match: (ctx: {
        path: string;
        isFile: boolean;
    }) => boolean;
    action: (ctx: {
        path: string;
        isFile: boolean;
    }) => void;
}
 const registerAssociationRule: (rule: IAssociationRule) => void;
 const executeAssociatedRule: (filename: string, rule_index?: number) => Promise<void>;
 const associationRules: IAssociationRule[];

type index_d$5_IAssociationRule = IAssociationRule;
 const index_d$5_associationRules: typeof associationRules;
 const index_d$5_executeAssociatedRule: typeof executeAssociatedRule;
 const index_d$5_registerAssociationRule: typeof registerAssociationRule;
 namespace index_d$5 {
  export { type index_d$5_IAssociationRule as IAssociationRule, index_d$5_associationRules as associationRules, index_d$5_executeAssociatedRule as executeAssociatedRule, index_d$5_registerAssociationRule as registerAssociationRule };
}

 const InlineTerminalId: (props: {
    terminal_id: string;
}) => react_jsx_runtime.JSX.Element;

 const useTerminal: () => _yuants_protocol.Terminal | null | undefined;

 const isTerminalConnected$: rxjs.Observable<boolean>;

 const useTick: (datasource_id: string, product_id: string) => rxjs.Observable<IQuote>;

 const index_d$4_InlineTerminalId: typeof InlineTerminalId;
 const index_d$4_hostUrl$: typeof hostUrl$;
 const index_d$4_isTerminalConnected$: typeof isTerminalConnected$;
 const index_d$4_terminal$: typeof terminal$;
 const index_d$4_useTerminal: typeof useTerminal;
 const index_d$4_useTick: typeof useTick;
 namespace index_d$4 {
  export { index_d$4_InlineTerminalId as InlineTerminalId, index_d$4_hostUrl$ as hostUrl$, index_d$4_isTerminalConnected$ as isTerminalConnected$, index_d$4_terminal$ as terminal$, index_d$4_useTerminal as useTerminal, index_d$4_useTick as useTick };
}

/**
 * @public
 */
interface ITradeCopierTradeConfig {
    id?: string;
    account_id: string;
    product_id: string;
    max_volume_per_order: number;
    limit_order_control?: boolean;
    disabled?: boolean;
}
/**
 * @public
 */
interface ITradeCopyRelation {
    id?: string;
    source_account_id: string;
    source_product_id: string;
    target_account_id: string;
    target_product_id: string;
    multiple: number;
    /** 根据正则表达式匹配头寸的备注 (黑名单) */
    exclusive_comment_pattern?: string;
    disabled?: boolean;
}
 type ITradeCopierStrategyBase = {
    /**
     * 策略类型
     */
    type?: string;
    /**
     * 最大订单量限制
     */
    max_volume?: number;
};
 type ITradeCopierStrategyConfig = {
    /**
     * 全局默认配置
     */
    global?: ITradeCopierStrategyBase;
    /**
     * 按照 product 特殊覆盖的配置
     */
    product_overrides?: Record<string, ITradeCopierStrategyBase>;
};
/**
 * @public
 */
interface ITradeCopierConfig {
    /**
     * 实际账户 ID
     *
     * - (强制) 预期账户 ID 格式: `TradeCopier/Expected/${account_id}`
     * - (建议) 预览账户 ID 格式: `TradeCopier/Preview/${account_id}`
     *
     * (防呆设计) 建议在使用时，先配置预览账户，确认无误后，再发布配置到预期账户。直接修改预期账户的配置，可能会导致跟单出现意外的问题。
     */
    account_id: string;
    /**
     * 是否启用跟单
     */
    enabled: boolean;
    /**
     * 跟单策略配置
     */
    strategy: ITradeCopierStrategyConfig;
    created_at: string;
    updated_at: string;
}

 const schemaOfTradeCopierConfig: JSONSchema7;

 const TradeCopierDetail: React$1.MemoExoticComponent<(props: {
    account_id: string;
}) => react_jsx_runtime.JSX.Element>;

type index_d$3_ITradeCopierConfig = ITradeCopierConfig;
type index_d$3_ITradeCopierStrategyBase = ITradeCopierStrategyBase;
type index_d$3_ITradeCopierStrategyConfig = ITradeCopierStrategyConfig;
type index_d$3_ITradeCopierTradeConfig = ITradeCopierTradeConfig;
type index_d$3_ITradeCopyRelation = ITradeCopyRelation;
 const index_d$3_TradeCopierDetail: typeof TradeCopierDetail;
 const index_d$3_schemaOfTradeCopierConfig: typeof schemaOfTradeCopierConfig;
 namespace index_d$3 {
  export { type index_d$3_ITradeCopierConfig as ITradeCopierConfig, type index_d$3_ITradeCopierStrategyBase as ITradeCopierStrategyBase, type index_d$3_ITradeCopierStrategyConfig as ITradeCopierStrategyConfig, type index_d$3_ITradeCopierTradeConfig as ITradeCopierTradeConfig, type index_d$3_ITradeCopyRelation as ITradeCopyRelation, index_d$3_TradeCopierDetail as TradeCopierDetail, index_d$3_schemaOfTradeCopierConfig as schemaOfTradeCopierConfig };
}

 namespace index_d$2 {
  export {  };
}

 const CSV: {
    escapeCellValue: (cell: any) => string;
    readFile: <T = any>(filename: string) => Promise<T[]>;
    writeFile: (filename: string, data: any[]) => Promise<void>;
    /**
     * 通过原始表格数据写入 CSV 文件
     * @param filename 写入的文件名
     * @param data 原始表格数据
     * @param transpose 是否转置数据 (行列互换), 默认不转置
     */
    writeFileFromRawTable: (filename: string, data: any[][], transpose?: boolean) => Promise<void>;
    parse: <T_1 = any>(csvString: string) => T_1[];
    stringify: (data: any[]) => string;
};

 const ZIP: {
    read: (zipFileBlob: Blob) => Promise<{
        filename: string;
        blob: Blob;
        isDirectory: boolean;
        isFile: boolean;
    }[]>;
};

 const index_d$1_CSV: typeof CSV;
 const index_d$1_ZIP: typeof ZIP;
 namespace index_d$1 {
  export { index_d$1_CSV as CSV, index_d$1_ZIP as ZIP };
}

 const isShowHome$: rxjs.BehaviorSubject<boolean | undefined>;
 const toggleShowHome: () => void;
 const HomePage: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element | null>;

 const DarkModeSetting$: rxjs.BehaviorSubject<"auto" | "light" | "dark" | undefined>;
 const isDarkMode$: Observable<boolean>;
 const useIsDarkMode: () => boolean;

 const DarkModeEffect: () => react_jsx_runtime.JSX.Element;

 const DarkmodeSwitch: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;

/**
 * Hook to use the page closing confirm
 *
 * usePageClosingConfirm hook is used to show a confirmation dialog when the user tries to close/refresh the page.
 *
 * recommend to use this hook in the component where you want to show the confirmation dialog.
 *
 * for example, some component with complex form data that the user might lose if they close the page.
 */
 const usePageClosingConfirm: (disabled?: boolean) => void;

 const FullScreenButton: () => react_jsx_runtime.JSX.Element;

 const network$: rxjs.Observable<string[]>;

interface IHostConfigItem {
    name: string;
    host_url: string;
}
 const hostConfigList$: rxjs.BehaviorSubject<IHostConfigItem[] | undefined>;
 const currentHostConfig$: rxjs.BehaviorSubject<IHostConfigItem | null | undefined>;
 const initAction$: ReplaySubject<{
    type: string;
    payload: any;
}>;

 const index_d_DarkModeEffect: typeof DarkModeEffect;
 const index_d_DarkModeSetting$: typeof DarkModeSetting$;
 const index_d_DarkmodeSwitch: typeof DarkmodeSwitch;
 const index_d_FullScreenButton: typeof FullScreenButton;
 const index_d_HomePage: typeof HomePage;
type index_d_IHostConfigItem = IHostConfigItem;
 const index_d_currentHostConfig$: typeof currentHostConfig$;
 const index_d_hostConfigList$: typeof hostConfigList$;
 const index_d_initAction$: typeof initAction$;
 const index_d_isDarkMode$: typeof isDarkMode$;
 const index_d_isShowHome$: typeof isShowHome$;
 const index_d_network$: typeof network$;
 const index_d_toggleShowHome: typeof toggleShowHome;
 const index_d_useIsDarkMode: typeof useIsDarkMode;
 const index_d_usePageClosingConfirm: typeof usePageClosingConfirm;
 namespace index_d {
  export { index_d_DarkModeEffect as DarkModeEffect, index_d_DarkModeSetting$ as DarkModeSetting$, index_d_DarkmodeSwitch as DarkmodeSwitch, index_d_FullScreenButton as FullScreenButton, index_d_HomePage as HomePage, type index_d_IHostConfigItem as IHostConfigItem, index_d_currentHostConfig$ as currentHostConfig$, index_d_hostConfigList$ as hostConfigList$, index_d_initAction$ as initAction$, index_d_isDarkMode$ as isDarkMode$, index_d_isShowHome$ as isShowHome$, index_d_network$ as network$, index_d_toggleShowHome as toggleShowHome, index_d_useIsDarkMode as useIsDarkMode, index_d_usePageClosingConfirm as usePageClosingConfirm };
}

export { index_d$v as AccountComposition, index_d$u as AccountInfo, index_d$t as AccountRiskInfo, index_d$s as Agent, index_d$r as BIOS, index_d$q as Chart, index_d$p as CommandCenter, index_d$o as Copilot, index_d$n as Data, index_d$m as DataRecord, index_d$l as DataSeries, index_d$k as Deploy, index_d$j as DesktopLayout, index_d$i as Editor, index_d$h as Extensions, index_d$g as FileSystem, index_d$f as Form, index_d$e as Fund, index_d$d as Interactive, index_d$c as Kernel, index_d$b as Market, index_d$a as Network, index_d$9 as Order, index_d$8 as Pages, index_d$7 as Products, index_d$6 as SQL, index_d$5 as System, index_d$4 as Terminals, index_d$3 as TradeCopier, index_d$2 as TransferOrder, index_d$1 as Util, index_d as Workbench };

}