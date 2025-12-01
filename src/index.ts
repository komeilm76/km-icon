import lib from './lib';
import type { IMakeConfigEntry } from './lib/fontawesome';
export default kmIcon;

export namespace kmIcon {
  export const flagIcons = lib.flagIcons;
  export const fontawesome = lib.fontawesome;
  export type iFontawesomeConfig = IMakeConfigEntry;
}
