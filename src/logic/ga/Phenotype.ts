import encoding from 'encoding-japanese';
import { Genotype } from './Genotype';

export class Phenotype {
  public static getValue(genotype: Genotype): string {
    return encoding.convert(genotype.getGenes(), {
      to: 'UNICODE',
      type: 'string',
    }) as string;

    // only ASCII
    // return String.fromCharCode(...this.genotype.getGenes());
  }
}
