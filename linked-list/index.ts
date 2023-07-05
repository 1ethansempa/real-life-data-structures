export interface LinkedList<T> {
    /* This method checks whether the linked list is empty or not. */
    isEmpty(): boolean;

    /* This method retrieves the element at a specific index in the linked list. */
    get(index: number): T | null | undefined;

    /* This method adds an element to the start of the linked list */
    push(data: T): void;

    /* This method removes and returns the last element from the linked list */
    pop(): T | undefined;

    /* This method adds an element to the end of the linked list. */
    append(data: T): void;

    /* This method removes and returns the last element from the linked list */
    removeTail(): T | undefined;

    /* This method inserts an element at a specific index in the linked list */
    insertAt(index: number, data: T): void;

    /* This method removes and returns the element at a specific index in the linked list */
    removeAt(index: number): T | undefined;

    /* This method clears the linked list, removing all elements */
    clear(): void;

    /* This method converts the linked list to an array. */
    toArray(): (T | null)[];

    /* This method returns the number of elements in the linked list */
    getLength(): number;
}