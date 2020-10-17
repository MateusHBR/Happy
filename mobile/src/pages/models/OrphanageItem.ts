export interface OrphanageItem {
  id: number,
  name: string,
  latitude:number,
  longitude: number,
  about: string,
  instructions: string,
  openingHours: string,
  openOnWeekends: boolean,
  images: [
    {
      url: string;
    }
  ],
}