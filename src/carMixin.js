// eslint-disable-next-line import/prefer-default-export
export const carMixin = {
  data() {
    return {
      cars: ['BMW', 'Mercedes', 'Chevrolet', 'Honda', 'Toyota'],
      filterText: '',
    };
  },
  computed: {
    filteteredCars() {
      return this.cars.filter(element => element.match(this.filterText));
    },
  },
};
