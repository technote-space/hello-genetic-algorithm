import {FitnessBase, IChromosome} from '@technote-space/genetic-algorithms-js';
import levenshtein from 'fast-levenshtein';
import {Genotype} from './Genotype';
import {Phenotype} from './Phenotype';
import {TestData} from './TestData/TestData';

export class Fitness extends FitnessBase {
  constructor(private testData: TestData) {
    super();
  }

  public evaluate(chromosome: IChromosome): void {
    const genotype = chromosome as Genotype;

    const diff       = levenshtein.get(this.testData.target, Phenotype.getValue(genotype));
    genotype.fitness = 1.0 / (diff + 1);
  }
}
