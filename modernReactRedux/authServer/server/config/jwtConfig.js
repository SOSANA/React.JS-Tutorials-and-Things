/**
 * Purpose of this File:
 *  - hold application secrets and config
 *  - remember this should always be hidden and never pushed to github or shared
 *  	but for development purposes we are sharing this
 *  - don't forget to add it to .gitignore file in future
 */

 const jwtConfig = {
   // your secret string can be any sequence of characters you want
   secret: 'sdlkfskjfldsj34ljdlkfjls4903509adsfaasfdasdf83708743',
 };

 export default jwtConfig;
