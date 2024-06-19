export interface Route {
    route_id: string;
    from_port: string;
    to_port: string;
    leg_duration: number;
    points: [number, number, number, number | null][];
  }
  