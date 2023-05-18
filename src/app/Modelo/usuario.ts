export class Usuario {

    constructor(
      public id: number,
      public name: string,
      public password: string,
    ) {  }

    getId(): number
    {
        return this.id
    }

    getName(): string
    {
        return this.name
    }

    getPassword(): string
    {
      return this.password
    }
    
  }