# Linked List

A linked list is a data structure that consists of a sequence of elements, where each element points to the next element in the list. It is called a "linked" list because each element holds a reference (or link) to the next element.

## Singly Linked List

In a singly linked list, each node contains a reference to the next node in the list. It forms a unidirectional sequence where traversal is only possible in one direction, typically from the head (the first node) to the tail (the last node)

[Node] -> [Node] -> [Node] -> [Node] -> null

## Doubly Linked List

In a doubly linked list, each node contains references to both the next and previous nodes in the list. This bidirectional linkage allows traversal in both forward and backward directions.

null <- [Node] <-> [Node] <-> [Node] -> null

## Advantages of Linked Lists > Arrays

- Efficient Insertion and Deletion: Linked lists allow efficient insertion and deletion of elements at any position in the list, whereas arrays require shifting of elements when a new element is added or removed, which can be slow and inefficient for large arrays.

- Memory Efficiency: Linked lists use memory more efficiently than arrays. In an array, all elements must be stored in contiguous memory locations, even if some of the elements are not used. In contrast, linked lists only allocate memory for the elements that are used, which can save memory in cases where the size of the data set is unknown or varies over time.

- More Efficient Sorting: In some cases, linked lists can be more efficient for sorting algorithms than arrays. This is because linked lists do not require swapping elements like arrays, which can be time-consuming for large arrays.
