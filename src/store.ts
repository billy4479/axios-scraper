/* eslint-disable import/prefer-default-export */

import { writable } from 'svelte/store';
import type Mark from './Models/mark';
import type MarkAndValue from './Models/markAndValue';

export const data = writable<Mark[]>([]);
export const darkMode = writable<boolean>(
  localStorage.getItem('darkMode') === 'dark'
);
export const average = writable<Map<string, MarkAndValue>>(new Map());
export const isOverlayShown = writable(false);
