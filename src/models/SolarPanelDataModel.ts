const API_KEY = "e1eebd7c38b276c51014548b6c80167d";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const SOLAR_URL = "https://api.openweathermap.org/data/2.5/solar_radiation";
const NASA_URL = "https://power.larc.nasa.gov/api/temporal/hourly/point";

export interface WeatherPoint {
  irradiance: number;
  temperature: number;
  wind_speed: number;
}

export interface PanelParams {
  lat: number;
  lon: number;
  area: number;          // m²
  efficiency: number;    // 0–1
  tilt_angle: number;    // degrees
  azimuth: number;       // degrees
  panel_type: string;    // e.g. "mono" or "poly"
  num_panels: number;    // NEW: number of panels in the system
}


export interface PVInputRequest {
    model_type: string;
    lat: number;
    long: number;
    start_date: string;
    end_date: string;
    system_capacity: number;
    panel_type: string;
    panel_efficiency: number;
    temp_coefficient: number;
    degradation_rate: number;
    previous_pv_output: number;
    panel_tilt: number;
    panel_azimuth: number;
}