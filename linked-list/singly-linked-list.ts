/**
 * A real-world example of a singly linked list could be a playlist in a music player application. 
 * Each song in the playlist can be represented as a node in the linked list, and the linked list 
 * maintains the order of the songs.
 */

import { LinkedList } from ".";

/* The class "Song" represents a song with properties such as title, artist, and duration. */
class Song {
    title: string;
    artist: string;
    duration: number;

    constructor(title: string, artist: string, duration: number) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }
}

/**
 * The PlaylistNode class is a generic class that represents 
 * a song(node) and a reference to the next node in the playlist 
 * to the next node.
 * @template T The type of the data stored in the node.
 * @property data The data stored in the node.
 * @property next A reference to the next node in the list. Can reference to null, if there is no next element.
*/
class PlaylistNode<Song> {
    data: Song;
    next: PlaylistNode<Song> | null;

    constructor(data: Song) {
        this.data = data;
        this.next = null;
    }
}

/**
 * class Playlist is a singly linked list
 */
export class Playlist<Song> implements LinkedList<Song>{

    /**
     * @property head The head of the playlist.
     */
    private head: PlaylistNode<Song> | null;
    /**
    * @property tail The tail of the playlist.
    */
    private tail: PlaylistNode<Song> | null;
    /**
     * @property length The length of the playlist.
     */
    private length: number;

    /**
   * Creates a new, empty linked list.
   */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * The function checks if the length of the playlist is equal to zero and returns a boolean
     * value indicating whether it is empty or not.
     * @returns A boolean value indicating whether the length of the object is equal to 0.
     */
    isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     * The `get` function retrieves the data at a specified index in the playlist, returning null if
     * the index is out of bounds or the list is empty.
     * @param {number} index - The index parameter is a number that represents the position of the
     * element we want to retrieve from the playlist.
     * @returns The `get` method returns the data at the specified index in the playlist. It can return
     * two possible values:
     */
    get(index: number): Song | null {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (this.isEmpty()) {
            return null;
        }

        let currentPlaylistNode: PlaylistNode<Song> = this.head!;

        for (let i: number = 0; i < index; i++) {
            if (!currentPlaylistNode.next) {
                return null;
            }

            currentPlaylistNode = currentPlaylistNode.next;
        }

        return currentPlaylistNode.data;
    }

    /**
     * The `push` function adds a new song to the beginning of the playlist.
     * @param {Song} data - The "data" parameter is of type "Song" and represents the song that is
     * being pushed into the playlist.
     */
    push(data: Song): void {
        const playlistNode: PlaylistNode<Song> = new PlaylistNode<Song>(data);

        if (this.isEmpty()) {
            this.head = playlistNode;
            this.tail = playlistNode;
        } else {
            playlistNode.next = this.head;
            this.head = playlistNode;
        }

        this.length++;
    }

    /**
     * The `pop()` function removes and returns the first element from a playlist, throwing an error if
     * the playlist is empty.
     * @returns a Song object or undefined.
     */
    pop(): Song | undefined {
        if (this.isEmpty()) {
            throw new Error('No items in playlist');
        }

        /** 
         * The exclamation mark `!` is used to assert that `this.head` is not null or undefined
        */
        const playlistNode: PlaylistNode<Song> = this.head!;

        this.head = this.head!.next;
        this.length--;

        return playlistNode.data;
    }

    /**
     * The `append` function adds a new node containing a song to the end of a linked list.
     * @param {Song} data - The "data" parameter is of type "Song" and represents the song that needs
     * to be appended to the playlist.
     */
    append(data: Song): void {
        const playlistNode: PlaylistNode<Song> = new PlaylistNode<Song>(data);

        if (this.isEmpty()) {
            this.head = playlistNode;
        } else {
            /* First change the next attribute of the current tail to the new node */
            this.tail!.next = playlistNode;
        }

        this.tail = playlistNode;
        this.length++;
    }

    /**
     * The `removeTail` function removes the last node from a linked list and returns its data.
     * @returns The `removeTail()` method returns the data of the removed tail node, which is of type
     * `Song` or `undefined` if the linked list is empty.
     */
    removeTail(): Song | undefined {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }

        const currentPlaylistTail = this.tail;


        /* This code block is checking if the head and tail of the linked list are the same node. If
        they are the same, it means that there is only one node in the linked list. In this case,
        the code sets both the head and tail to null and the length to 0, effectively clearing the
        linked list. It then returns the data of the removed tail node. */
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;

            return currentPlaylistTail!.data;
        }

        let currentPlaylistNode: PlaylistNode<Song> = this.head;


        /**
         * `A loop is executed that iterates through the linked list until it finds the node 
         * whose next property is not equal to itself.
         *  This loop effectively finds the second-to-last node in the linked list, 
         * which will become the new tail node.
         */
        while (currentPlaylistNode.next !== currentPlaylistNode) {
            currentPlaylistNode = currentPlaylistNode.next!;
        }

        this.tail = currentPlaylistNode;
        this.length--;

        return currentPlaylistTail!.data;
    }


    /**
     * The `insertAt` function inserts a new song at a specified index in a playlist, handling cases where
     * the index is out of bounds or at the beginning or end of the playlist.
     * @param {number} index - The index parameter is a number that represents the position at which the
     * new song should be inserted in the playlist.
     * @param {Song} data - The `data` parameter represents the song that needs to be inserted into the
     * playlist. It is of type `Song`, which suggests that it is an object or data structure that
     * represents a song.
     * @returns In this code snippet, the `insertAt` method does not explicitly return a value. It is a
     * `void` method, which means it does not return anything.
     */
    insertAt(index: number, data: Song): void {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            this.push(data);

            return;
        }

        /* The `if (index === this.length)` condition in the `insertAt` method is checking if the index
        provided is equal to the length of the playlist. If it is, it means that the new song should
        be appended to the end of the playlist. */
        if (index === this.length) {
            this.append(data);

            return;
        }

        const newPlaylistNode: PlaylistNode<Song> = new PlaylistNode<Song>(data);

        let currentPlaylistNode: PlaylistNode<Song> | null = this.head;

        for (let i: number = 0; i < index - 1; i++) {
            if (!currentPlaylistNode) {
                return;
            }

            currentPlaylistNode = currentPlaylistNode.next;
        }

        if (currentPlaylistNode) {
            const nextNode = currentPlaylistNode.next;

            currentPlaylistNode.next = newPlaylistNode;

            newPlaylistNode.next = nextNode;

            this.length++;
        }
    }

    /**
     * The `removeAt` function removes a node at a specified index from a linked list and returns the data
     * of the removed node.
     * @param {number} index - The index parameter represents the position of the node that needs to be
     * removed from the playlist. It is of type number.
     * @returns The method `removeAt` returns the removed `Song` object at the specified index, or
     * `undefined` if the index is out of bounds.
     */
    removeAt(index: number): Song | undefined {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            return this.pop();
        }

        if (index === this.length - 1) {
            return this.removeTail();
        }

        let previousNode: PlaylistNode<Song> | null = null;
        let currentPlaylistNode: PlaylistNode<Song> | null = this.head;

        for (let i: number = 0; i < index; i++) {
            if (!currentPlaylistNode) {
                throw new Error('Index out of bounds');
            }

            /**
             * Before moving to the next node in the linked list, the previousNode is updated 
             * to hold the reference to the current node. This is necessary to keep track of
             * the node that comes before the one at the desired index
             */
            previousNode = currentPlaylistNode;

            /**
             *  This line updates currentPlaylistNode to point to the next node in the linked list. 
             * It moves the traversal forward, getting closer to the desired index.
             */
            currentPlaylistNode = currentPlaylistNode.next;
        }

        /**
         * This line updates the next reference of the node before the one at the desired
         *  index (previousNode) to skip over the node at the desired index.
         *  It effectively removes the node from the linked list by bypassing it.
         */
        if (previousNode && currentPlaylistNode) {
            previousNode.next = currentPlaylistNode.next;
            this.length--;
        }

        return currentPlaylistNode?.data;
    }


    /**
     * The `clear` function resets the linked list by setting the head and tail to null and the length
     * to 0.
     */
    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * The `toArray` function converts a linked list of songs into an array of songs.
     * @returns The `toArray()` method returns an array of `Song` objects or `null` values.
     */
    toArray(): (Song | null)[] {
        const playlistArr: Song[] = [];
        let currentPlaylistNode: PlaylistNode<Song> | null = this.head;

        while (currentPlaylistNode) {
            playlistArr.push(currentPlaylistNode.data);
            currentPlaylistNode = currentPlaylistNode.next;
        }

        return playlistArr;
    }


    /**
     * The function "getLength" returns the length of something as a number.
     * @returns The length of the object.
     */
    getLength(): number {
        return this.length;
    }

}

