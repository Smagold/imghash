/**
 * Generates image perceptual hash; returns Promise<string>
 * @param path path to the image (supported formats are png and jpeg) or Buffer
 * @param bits (optional) hash length [default: 8]
 * @param format (optional) output format [default: hex]
 * @returns ES6 Promise, resolved returns hash string in specified format and length (eg. f884c4d8d1193c07)
 */
export function hash(path: string | Buffer, bits?: number, format?: string): Promise<string>;

export interface rawDescriptor {
  width: number;
  height: number;
  data: any;
}
/**
 * @param data image data descriptor in form { width: [width], height: [height], data: [decoded image pixels] }
 * @param bits hash length
 * @returns hex hash
 */
export function hashRaw(data: rawDescriptor, bits: number): string;

/**
 * @param hex binary hash string e.g. _f884c4d8d1193c07_
 * @returns binary string, e.g. _1000100010000010_
 */
export function hexToBinary(hex: string): string;

/**
 * @param binary binary hash string e.g. _1000100010000010_
 * @returns hex string, e.g. _f884c4d8d1193c07_
 */
export function binaryToHex(binary: string): string;