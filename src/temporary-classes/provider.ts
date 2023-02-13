abstract class Provider {
  id?: string;
  type: string;

  constructor (id: string, type: string) {
    this.id = id;
    this.type = type;
  }
}

export default Provider;