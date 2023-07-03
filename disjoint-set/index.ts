/**
 * You are organizing a social event where attendees can form groups based on their interests. 
 * You want to allow attendees to join or leave groups freely. 
 * Additionally, you want to track the number of groups and the members in each group efficiently.
 * 
 * This is the logic
 */

class DisjointSet {
    /* The `parent` property is a Map that stores the parent(root) of each item in the disjoint set. It is
    used to keep track of the parent-child relationships between items. Each item is represented by
    a string key, and the value associated with the key is the parent of that item. */
    private parent: Map<string, string>;


    /* The `size` property is a Map that stores the size of each group in the disjoint set. It is used
    to keep track of the number of members in each group efficiently. Each group is represented by a
    string key, and the value associated with the key is the size of that group. */
    private size: Map<string, number>;

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
     * The find method takes an item (representing an element) as input 
     * and returns the representative(child) or root(parent) of the set to which the item belongs.
     * @param {string} item - The `item` parameter is a string that represents the item we want to find
     * in the data structure.
     * @returns a string.
     */
    find(item: string): string {

        /* This checks if the current item is the root(parent)
        of its set. */
        if (this.parent.get(item) === item) {
            return item;
        }

        /**
         * A recursive call of this.find(this.parent.get(item)!) continues until
         *  the representative of the set is found. Once found, the root of the 
         * set is stored in the root variable.
         * 
         * Its assumed that an item won't result in a null/ undefined.
         */
        const root = this.find(this.parent.get(item)!);
        this.parent.set(item, root);
        return root;
    }


    /**
     * The union method allows attendees to join groups by merging two sets. 
     * The group size is updated accordingly, ensuring that the larger group absorbs the smaller group.
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

            /**
             * Next, it compares the sizes of the sets to determine which set is larger. 
             * If size1 is less than size2, it means the set rooted at root1 is smaller 
             * than the set rooted at root2.
             * In this case, it performs the union by setting the parent of 
             * root1 to root2 (this.parent.set(root1, root2)) and updates the 
             * size of root2 to be the sum of size1 and size2 
             * (this.size.set(root2, size1 + size2)). 
             * This effectively merges the smaller set (root1) into the larger set (root2).
             */
            if (size1 < size2) {
                this.parent.set(root1, root2);
                this.size.set(root2, size1 + size2);
            } else {
                this.parent.set(root2, root1);
                this.size.set(root1, size1 + size2);
            }
        }
    }

    /**
     * The function "getGroupSize" returns the size of a group that an item belongs to.
     * @param {string} item - A string representing an item in a group.
     * @returns The size of the group that the item belongs to.
     */
    getGroupSize(item: string): number {
        const root = this.find(item);
        return this.size.get(root)!;
    }

    /**
     * The function "getNumGroups" returns the number of groups.
     * @returns The number of groups.
     */
    getNumGroups(): number {
        return this.size.size;
    }
}

export { DisjointSet }