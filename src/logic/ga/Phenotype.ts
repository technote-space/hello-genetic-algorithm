import encoding from 'encoding-japanese';
import {Genotype} from './Genotype';

export class Phenotype {
  protected _fitness: number;

  public constructor(protected genotype: Genotype) {
    this._fitness = -1;
  }

  public get fitness(): number {
    return this._fitness;
  }

  public setFitness(fitness: number): void {
    this._fitness = Math.max(0, fitness);
  }

  public get value(): string {
    return encoding.convert(this.genotype.getGenes(), {
      to: 'UNICODE',
      type: 'string',
    }) as string;

    // only ASCII
    // return String.fromCharCode(...this.genotype.getGenes());
  }
}
