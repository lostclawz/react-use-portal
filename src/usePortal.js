import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function usePortal(children) {
   const el = useRef(document.createElement('div'));
   useEffect(() => {
      document.body.appendChild(el.current);
      return () => document.body.removeChild(el.current)
   }, [])
   return createPortal(children, el.current)
}