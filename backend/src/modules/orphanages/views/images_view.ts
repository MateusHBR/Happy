import Image from '../infra/typeorm/entities/Image';
import 'dotenv/config';

export default {
  render(image: Image) {
    return {
      url: `${process.env.URL}/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
