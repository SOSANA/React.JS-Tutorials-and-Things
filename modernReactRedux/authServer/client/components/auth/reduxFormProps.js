/**
 * This is for redux-form v5 and react v15 that was causing prop validation
 * on the input tag using spread op
 * This is a quick hack to fix log warning till v6 api is released
 */

/*eslint-disable */
 export const domOnlyProps = ({
   initialValue,
   error,
   autofill,
   onUpdate,
   valid,
   invalid,
   dirty,
   pristine,
   active,
   touched,
   visited,
   autofilled,
   ...domProps }) => domProps;
