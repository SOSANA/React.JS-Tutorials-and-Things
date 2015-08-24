/**
 * EVENTS IN REACTJS:
 *  - online src http://facebook.github.io/react/docs/events.html
 *  - common occurance for events this.handle than whatever event
 *  - ex: onclick={this.handleChange} or onKeyPress={this.handlKeyPress}
 *  - keep in mind you can't put event handlers inside another react 
 *    component, instead it gets passed in as a property. 
 *    See buildWebAppsWithReactJSAndFlux/section4/dropdown/dropdown.jsx
 *    
 * 
 *  - Clipboard Events
 *          - onCopy 
 *          - onCut 
 *          - onPaste
 *      - Properties
 *          - DOMDataTransfer 
 *          - clipboardData
 *  - Keyboard Events
 *          - onKeyDown 
 *          - onKeyPress 
 *          - onKeyUp
 *      - Properties
 *          - boolean altKey
 *          - Number charCode
 *          - boolean ctrlKey
 *          - function getModifierState(key)
 *          - String key
 *          - Number keyCode
 *          - String locale
 *          - Number location
 *          - boolean metaKey
 *          - boolean repeat
 *          - boolean shiftKey
 *          - Number which
 * Focus Events
 *          - onFocus 
 *          - onBlur
 *      - Properties
 *          - DOMEventTarget 
 *          - relatedTarget
 * Form Events
 *          - onChange 
 *          - onInput 
 *          - onSubmit
 * Mouse Events
 *          - onClick 
 *          - onContextMenu 
 *          - onDoubleClick 
 *          - onDrag 
 *          - onDragEnd 
 *          - onDragEnter 
 *          - onDragExit 
 *          - onDragLeave 
 *          - onDragOver 
 *          - onDragStart 
 *          - onDrop 
 *          - onMouseDown 
 *          - onMouseEnter 
 *          - onMouseLeave 
 *          - onMouseMove 
 *          - onMouseOut 
 *          - onMouseOver 
 *          - onMouseUp
 *      - Properties
 *          - boolean altKey 
 *          - Number button 
 *          - Number clientX 
 *          - Number clientY 
 *          - boolean ctrlKey 
 *          - function getModifierState(key) 
 *          - boolean metaKey 
 *          - Number pageX 
 *          - Number pageY 
 *          - DOMEventTarget 
 *          - relatedTarget 
 *          - Number screenX 
 *          - Number screenY 
 *          - boolean shiftKey
 * Touch events
 *  - To enable touch events, call React.initializeTouchEvents(true)
 *          - onTouchCancel 
 *          - onTouchEnd 
 *          - onTouchMove 
 *          - onTouchStart
 *      - Properties
 *          - boolean altKey 
 *          - DOMTouchList changedTouches 
 *          - boolean ctrlKey 
 *          - function getModifierState(key) 
 *          - boolean metaKey 
 *          - boolean shiftKey 
 *          - DOMTouchList targetTouches 
 *          - DOMTouchList touches
 * UI Events
 *          - onScroll
 *          - Number detail
 *          - DOMAbstractView view
 * Wheel Events
 *          - onWheel
 *      - Properties
 *          - Number deltaMode
 *          - Number deltaX
 *          - Number deltaY
 *          - Number deltaZ
 */