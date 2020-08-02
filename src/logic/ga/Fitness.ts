import {FitnessBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import levenshtein from 'fast-levenshtein';
import {Genotype} from './Genotype';
import {TestData} from './TestData/TestData';

export class Fitness extends FitnessBase {
  constructor(private testData: TestData) {
    super();
  }

  public evaluate(chromosome: IChromosome): void {
    const genotype  = chromosome as Genotype;
    const phenotype = genotype.phenotype;

    const diff = levenshtein.get(this.testData.target, phenotype.value);
    phenotype.setFitness(1.0 / (diff + 1));
  }
}
