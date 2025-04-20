import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useWindowSize } from 'hooks';
import styles from './Articles.module.css';

const SkeletonPost = ({ index }) => {
  return (
    <article
      aria-hidden="true"
      className={styles.post}
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              Read more
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Articles = () => {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  return (
    <article className={styles.articles}>
      <Meta
        title="Articles"
        description="Coming soon content. Stay tuned!"
      />
      <Section className={styles.content}>
        <header className={styles.header}>
          <Heading className={styles.heading} level={5} as="h1">
            <DecoderText text="Work Samples" />
          </Heading>
        </header>
        <div className={styles.list}>
          <SkeletonPost index={0} />
        </div>
      </Section>
      <Footer />
    </article>
  );
};
