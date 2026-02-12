import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple Board',
    Svg: require('@site/static/img/simple-board-line-07.svg').default,
    description: (
      <>
        The board is designed to simplify the setup and pin assignment of microcontoller to be compatible with Arduino Library and Mircopython. 
        It lets you work on your ideas in seconds.
      </>
    ),
  },
  {
    title: 'Cauldrone Library',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We prepared software libraries for all of our product to further makes hardware setup easier and faster.
      </>
    ),
  },
  {
    title: 'Growing Product Catalog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The cauldone products catalog grows with you. Your feedback will be used to continue making our products better and larger quantity to help you work on your ideas.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
