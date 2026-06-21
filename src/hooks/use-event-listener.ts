import { useEffect, useRef } from 'react';

export function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
   eventName: K,
   handler: (event: GlobalEventHandlersEventMap[K]) => void,
   element:
      | React.RefObject<HTMLElement>
      | HTMLElement
      | Window
      | Document = window,
   options?: boolean | AddEventListenerOptions,
) {
   const savedHandler = useRef(handler);

   useEffect(() => {
      savedHandler.current = handler;
   }, [handler]);

   useEffect(() => {
      const target =
         element && 'current' in element ? element.current : element;
      if (!target || !target.addEventListener) return;

      const listener = (event: Event) => savedHandler.current(event as any);

      target.addEventListener(eventName, listener, options);
      return () => target.removeEventListener(eventName, listener, options);
   }, [eventName, element, options]);
}
