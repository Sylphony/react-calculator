# Actions
Actions are objects which contains data about what needs to be changed and will be dispatched to the reducers.

Each action is a function that typically returns an object.  The returned object requires at least a `type` property to label the action, typically written as all caps with underscore.  In addition, the object can optionally include other properties for which to dispatch.

These actions are exported to the Container to map dispatch events to props.
