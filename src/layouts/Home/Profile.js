import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m a backend-heavy full-stack developer with a love for turning raw ideas into working apps.
      Over the past few years, I’ve built real-time systems, social platforms, and daily-use tools using technologies like Node.js, Firebase, Flutter, and React Native. Whether it’s an alert-based fuel tracker or a smart local-community platform — I enjoy solving real-world problems and shipping fast.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I started with mobile app development in Flutter, but soon found myself diving into backend APIs, secure data flows, and serverless functions.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    When I’m not coding, you’ll probably find me:
      <Text data-visible={visible} size="l" as="p">⛰️ Trekking through the Himalayas with my crew at Yatra Hikes</Text>
      <Text data-visible={visible} size="l" as="p">♟️ Playing Cricket or quick Walk</Text>
      <Text data-visible={visible} size="l" as="p">☕ Catching up on tech ideas over a strong cup of chai</Text>
    </Text>
  </Fragment>
);



export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Know Who I&#39;m
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <Image
                  placeholder={profileImgPlaceholder}
                  srcSet={profileKatakana}
                  className={styles.profileText}
                  style={{
                    top: '-110px',
                    left: '91px',
                    scale: '0.85',
                    transform: 'rotate(90deg)',
                  }}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
