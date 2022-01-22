export class Player {
  id: number;
  name: string | undefined;

  constructor(id: number = 0, name?: string) {
    this.id = id;
    this.name= name;
  }
}
