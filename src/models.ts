export type StopList = readonly string[];
export interface ITrip {
  id: number;
  departureStop: string;
  departureTime: Date;
  arrivalStop: string;
  arrivalTime: Date;
}

export type TripList = readonly ITrip[];
