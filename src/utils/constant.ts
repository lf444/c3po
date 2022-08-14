export const computerURL = "http://localhost:8080/computeChanceOfarrival";

export interface Destination {
  destination: string;
  travel_time: number;
}

export interface chancesOfArrival {
  path: Destination[];
  percentOfSuccess: number;
  instrucitonToAvoidPirate?: {
    destination: string;
    arrivalShouldbeOnday: number;
  }[];
}
