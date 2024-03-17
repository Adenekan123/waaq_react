"use client";

import { useState } from 'react'

export const useToggler = () => {
 const [state,setState] = useState(false);

 const toggle = (value?:boolean) => setState(value ? value : prev=>!prev);

 return {state,toggle}
}

