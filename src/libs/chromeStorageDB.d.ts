/**
 * Adapted from localstorageDB
 */

declare type chromeStorageDB_callback = (object: chromeStorageDB_fields) => chromeStorageDB_dynamicFields;
declare type chromeStorageDB_callbackFilter = (object: chromeStorageDB_fields) => boolean;

declare class chromeStorageDB {
    constructor(database_name: string, storage_engine?: Storage); // Constructor: storage_engine can either be chrome.storage (default) or sessionStorage
    isNew(fn?:chromeStorageDB_callback): void; // Returns true if a database was created at the time of initialisation with the constructor
    drop(): void; // Deletes a database, and purges it from chrome.storage
    getItem(key: string): Promise<chrome.storage.StorageArea>; // Retrieve specified value from chrome.storage
    replace(json: string): void; // Replaced entire contents of chrome.storage database with passed in json
    setItem(key: string, value: string): void; // Set value for chrome.storage
    tableCount(): number; // Returns the number of tables in a database
    commit(fn?:chromeStorageDB_callback): boolean; // Commits the database to chrome.storage. Returns true if successful, and false otherwise (highly unlikely)
    serialize(): string; // Returns the entire database as serialized JSON
    tableExists(table: string): boolean; // Checks whether a table exists in the database
    tableFields(table: string): string[]; // Returns the list of fields of a table
    createTable(table: string, fields: string[]); // Creates a table - fields is an array of string fieldnames. 'ID' is a reserved fieldname.
    createTableWithData(table: string, rows: { [T: string]: any }[]);
	/*
	 Creates a table and populates it
	 rows is an array of object literals where each object represents a record
	 [{field1: val, field2: val}, {field1: val, field2: val}]
	 */
    alterTable(table: string, new_fields: string[] | string, default_values: chromeStorageDB_dynamicFields | string);
	/*
	 Alter a table
	 - new_fields can be a array of columns OR a string of single column.
	 - default_values (optional) can be a object of column's default values OR a default value string for single column for existing rows.
	 */
    dropTable(table: string): void; // Deletes a table from the database
    truncate(table: string): void; // Empties all records in a table and resets the internal auto increment ID to 0
    columnExists(table: string, field: string): boolean; // Checks whether a column exists in database table.
    rowCount(table: string): number; // Returns the number of rows in a table
    insert(table: string, data: { [T: string]: any }): number;
	/*
	 Inserts a row into a table and returns its numerical ID
	 - data is an object literal with field-values
	 every row is assigned an auto-incremented numerical ID automatically
	 */
    query(table: string, query?: { [T: string]: any }, limit?: number, start?: number, sort?: any): chromeStorageDB_fields[];
	/* DEPRECATED
	 Returns an array of rows (object literals) from a table matching the query.
	 - query is either an object literal or null. If query is not supplied, all rows are returned
	 - limit is the maximum number of rows to be returned
	 - start is the number of rows to be skipped from the beginning (offset)
	 - sort is an array of sort conditions, each one of which is an array in itself with two values
	 - distinct is an array of fields whose values have to be unique in the returned rows
	 Every returned row will have it's internal auto-incremented id assigned to the variable ID
	 */
    queryAll(table: string, params: chromeStorageDB_queryParams): chromeStorageDB_fields[];
	/*
	 Returns an array of rows (object literals) from a table matching the query.
	 - query is either an object literal or null. If query is not supplied, all rows are returned
	 - limit is the maximum number of rows to be returned
	 - start is the number of rows to be skipped from the beginning (offset)
	 - sort is an array of sort conditions, each one of which is an array in itself with two values
	 - distinct is an array of fields whose values have to be unique in the returned rows
	 Every returned row will have it's internal auto-incremented id assigned to the variable ID
	 */
    update(table: string, query: chromeStorageDB_dynamicFields | chromeStorageDB_callbackFilter, update?: chromeStorageDB_callback): number;
	/*
	 Updates existing records in a table matching query, and returns the number of rows affected
	 - query is an object literal or a function. If query is not supplied, all rows are updated
	 - update_function is a function that returns an object literal with the updated values
	 */
    insertOrUpdate(table: string, query: chromeStorageDB_dynamicFields | chromeStorageDB_callbackFilter, data: chromeStorageDB_fields): number;
	/*
	 Inserts a row into a table if the given query matches no results, or updates the rows matching the query.
	 - query is either an object literal, function, or null.
	 - data is an object literal with field-values
	 Returns the numerical ID if a new row was inserted, or an array of IDs if rows were updated
	 */
    deleteRows(table: string, query: chromeStorageDB_dynamicFields | chromeStorageDB_callbackFilter): number;
	/*
	 Deletes rows from a table matching query, and returns the number of rows deleted
	 - query is either an object literal or a function. If query is not supplied, all rows are deleted
	 */
}

interface chromeStorageDB_fields extends chromeStorageDB_dynamicFields {
    ID: number;
}

interface chromeStorageDB_dynamicFields {
    [T: string]: any;
}

interface chromeStorageDB_queryParams {
    query?: { [T: string]: any }; // - query is either an object literal or null. If query is not supplied, all rows are returned
    limit?: number; // - limit is the maximum number of rows to be returned
    start?: number; // - start is the number of rows to be skipped from the beginning (offset)
    sort?: { [T: string]: any }[]; // - sort is an array of sort conditions, each one of which is an array in itself with two values
    distinct?: string[]; // - distinct is an array of fields whose values have to be unique in the returned rows
}

declare module 'chromeStorageDB' {
    export = chromeStorageDB;
}
