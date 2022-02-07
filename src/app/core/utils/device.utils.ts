import { Device } from '../models/device.model';
import { SortedDevicesPart } from '../models/sortedDevicesPart.model';

export const sortDevicesIntoLetterSegments = (devices: Device[]) => {
  if (devices.length === 0) {
    return [] as SortedDevicesPart[];
  }
  let result: SortedDevicesPart[] = [];
  let subResult: SortedDevicesPart = null;
  for (let index = 0; index < devices.length; index++) {
    const element = devices[index];
    const startingLetter = element.name.substring(0, 1).toUpperCase();
    if (!subResult || startingLetter !== subResult.startingLetter) {
      if (subResult) {
        result.push(subResult);
      }
      subResult = {
        startingLetter,
        devices: [],
      };
    }
    subResult.devices.push(element);
  }
  result.push(subResult);
  return result;
};
