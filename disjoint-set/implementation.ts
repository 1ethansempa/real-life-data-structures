import { DisjointSet } from ".";

/* Read more on logic in the index */

const ds = new DisjointSet();

/* Make sets for attendees */
/* Eadh attendee is initially in their own set */

ds.makeSet("Alice");
ds.makeSet("Bob");
ds.makeSet("Charlie");
ds.makeSet("Dave");

/* Attendees join groups through unions */
ds.union("Alice", "Bob");
ds.union("Charlie", "Dave");

// Get the group size of an attendee
console.log(ds.getGroupSize("Bob")); // Output: 2

// Get the number of groups
console.log(ds.getNumGroups()); // Output: 2

ds.union("Bob", "Charlie");

const attendee = ds.find("Bob")

//return the parent
console.log(attendee)

