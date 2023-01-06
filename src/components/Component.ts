type Props = {
  name: string;
}

export class Component {
  public name: string;

  constructor({ name }: Props) {
    this.name = name;
  }
}