type Images = Array<{
  path: string;
}>;

export default interface ICreateOrphanageDTO {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: boolean;
  images: Images;
}
