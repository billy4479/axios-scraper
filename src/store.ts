/* eslint-disable import/prefer-default-export */

import { writable } from 'svelte/store';
import type Mark from './Models/mark';

export const data = writable<Mark[]>([]);
export const darkMode = writable<boolean>(
  localStorage.getItem('darkMode') === 'dark'
);
