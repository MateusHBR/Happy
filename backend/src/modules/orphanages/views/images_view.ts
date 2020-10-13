import Image from '../infra/typeorm/entities/Image';

export default {
  render(image: Image) {
    return {
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
