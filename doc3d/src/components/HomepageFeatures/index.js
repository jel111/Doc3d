import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Printing Today',
    Svg: require('@site/static/img/getprinting.svg').default,
    description: (
      <>
        Master 3D printing quickly with our easy-to-follow guides!
      </>
    ),
  },
  {
    title: 'Next Level - Learn To Model',
    Svg: require('@site/static/img/learnmodel.svg').default,
    description: (
      <>
        Take your 3d printing to the next level and learn how to make your own models.
      </>
    ),
  },
  {
    title: 'Community First',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Everyone leans better when they have help from like minds. Let's do this together.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
