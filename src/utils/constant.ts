export const computerURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://falcon-computer-nodejs.herokuapp.com";

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
