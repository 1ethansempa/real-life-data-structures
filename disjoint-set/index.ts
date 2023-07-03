/**
 * You are organizing a social event where attendees can form groups based on their interests. 
 * You want to allow attendees to join or leave groups freely. 
 * Additionally, you want to track the number of groups and the members in each group efficiently.
 */

class DisjointSet {
    /* The `parent` property is a Map that stores the parent of each item in the disjoint set. It is
    used to keep track of the parent-child relationships between items. Each item is represented by
    a string key, and the value associated with the key is the parent of that item. */
    parent: Map<string, string>;


    /* The `size` property is a Map that stores the size of each group in the disjoint set. It is used
    to keep track of the number of members in each group efficiently. Each group is represented by a
    string key, and the value associated with the key is the size of that group. */
    size: Map<string, number>;

    constructor() {
        this.parent = new Map();
        this.size = new Map();
    }


    /**
     * The function "makeSet" adds an item to a set and initializes its size to 1.
     * @param {string} item - A string representing the item to be added to the set.
     */
    makeSet(item: string): void {
        this.parent.set(item, item);
        this.size.set(item, 1);
    }

    /**
     * The function finds the root of an item in a data structure and performs path compression.
     * @param {string} item - The `item` parameter is a string that represents the item we want to find
     * in the data structure.
     * @returns a string.
     */
    find(item: string): string {
        if (this.parent.get(item) === item) {
            return item;
        }
        const root = this.find(this.parent.get(item)!);
        this.parent.set(item, root); // Path compression
        return root;
    }


    /**
     * The `union` function merges two sets by updating their parent and size information.
     * @param {string} item1 - A string representing the first item to be unioned.
     * @param {string} item2 - The parameter "item2" is a string representing the second item to be
     * unioned.
     */
    union(item1: string, item2: string): void {
        const root1 = this.find(item1);
        const root2 = this.find(item2);

        if (root1 !== root2) {
            const size1 = this.size.get(root1)!;
            const size2 = this.size.get(root2)!;

            if (size1 < size2) {
                this.parent.set(root1, root2);
                this.size.set(root2, size1 + size2);
            } else {
                this.parent.set(root2, root1);
                this.size.set(root1, size1 + size2);
            }
        }
    }

    getGroupSize(item: string): number {
        const root = this.find(item);
        return this.size.get(root)!;
    }

    getNumGroups(): number {
        return this.size.size;
    }
}