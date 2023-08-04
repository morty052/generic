import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'wwdtpcpb',
  dataset: 'production',
  apiVersion: '1',
  useCdn: false,
  token: 'skYL5zAKoB6CGuM2nE5RFRaU0TNfnx7osMnVncwHYtGk8niAKNvsh6vWlgxmdHlPx6icOq1C0f0EV971hBsOv4X69xQ10VGgZlrd85i8VDXUu4YKriX0XaL08qI28K5yJhG1wV2WQI5Yuca7kaRCp946Vc9ZaHaEphNxeO4U7QcCn90pn58i'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);