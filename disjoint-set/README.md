# Disjoint set

A disjoint set is a way to organize a collection of items into separate groups or sets, where each item belongs to exactly one set and no item can belong to more than one set.

Imagine you have a group of people, and you want to organize them into different teams or groups based on certain criteria. A disjoint set data structure helps you keep track of these teams or groups. Each person is represented by an element, and each team or group is represented by a set.

Initially, each person is considered to be in a separate team, meaning each person forms their own set. As you start organizing the people, you can merge teams together if they meet certain conditions. For example, if two people are friends or have a common interest, you can merge their teams into a single team. The representative or leader of the merged team becomes the representative for all the people in that team.

The disjoint set data structure allows you to efficiently determine which team or group a person belongs to. You can easily find the representative or leader of a person's team by following a chain of connections until you reach the leader.

The main operations provided by the disjoint set data structure are "union" and "find." Union is used to merge two sets or teams into one, while find is used to determine the team or group that a person belongs to by finding the representative or leader of their team.

By using these operations efficiently, the disjoint set data structure can help you solve various problems that involve organizing items into separate groups or finding relationships between items in a collection.

## Real Life Examples

- Social network analysis: Disjoint sets can be applied in social network analysis to identify communities or clusters within a network. By treating individuals as elements and their connections as edges, disjoint sets can help group individuals into communities based on their social interactions.
